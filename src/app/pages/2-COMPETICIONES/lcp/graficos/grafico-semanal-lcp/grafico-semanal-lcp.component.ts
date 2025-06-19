import {Component,ElementRef,Input,OnChanges,OnInit,SimpleChanges,ViewChild,} from '@angular/core';
import Chart from 'chart.js/auto';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcpService } from 'src/app/services/lcp/registro-peso-lcp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grafico-semanal-lcp',
  templateUrl: './grafico-semanal-lcp.component.html',
  styleUrls: ['./grafico-semanal-lcp.component.scss'],
})
export class GraficoSemanalLcpComponent   implements OnInit, OnChanges {
  @ViewChild('lineChart', { static: false }) lineChartRef!: ElementRef;
  @Input() liga: LigaCorporalProfesional | null = null;

  chart: Chart | null = null;
  public usuario: Usuario;
  public pesoData: any[] = [];
  public unidadElegida: string = 'kg';

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLcpService: RegistroPesoLcpService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga) {
      console.log('Nueva liga seleccionada:', this.liga.nombre);
    }
    this.obtenerTodosLosPesos(); // Si cambia la liga, vuelve a cargar los datos
  }
  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = (this.usuario?.unidad || 'kg').toLowerCase();
    this.obtenerTodosLosPesos();

  }

  obtenerTodosLosPesos() {
    if (!this.liga?._id) return;


    this.registroPesoLcpService
      .obtenerPesosTodasLasJornadasGrafica(this.liga._id)
      .subscribe({
        next: (resp) => {
          console.log('Pesos obtenidos:', resp.registros);
          this.pesoData = resp.registros || [];
          this.crearGrafico();
        },
        error: (err) => {
          console.error('Error al obtener los pesos:', err);
        },
      });
  }

  // obtiene los datos de los utlimos 8semana

  crearGrafico() {
    if (this.chart) {
      this.chart.destroy();
    }

    const datosFormateados = this.obtenerDatosFormateadosPorParticipante();

    const datasets = Object.keys(datosFormateados).map((participanteNombre) => {
      const { labels, values } = datosFormateados[participanteNombre];

      return {
        label: participanteNombre,
        data: values,
        borderColor: this.getRandomColor(),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.3,
        spanGaps: true, // Para saltar valores null y conectar puntos disponibles
      };
    });

    const labels = this.obtenerLabelsGlobales();
    const ctx = this.lineChartRef.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Evolución semanal del peso por participante',
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Fecha: ${tooltipItems[0].label}`,
              label: (tooltipItem) =>
                `Peso: ${
                  tooltipItem.raw === null ? 'Sin datos' : tooltipItem.formattedValue
                } ${this.unidadElegida}`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fecha (inicio de semana)',
            },
          },
          y: {
            title: {
              display: true,
              text: `Peso (${this.unidadElegida})`,
            },
            beginAtZero: true,
          },
        },
      },
    });
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  obtenerDatosFormateadosPorParticipante(): {
    [key: string]: { labels: string[]; values: (number | null)[] };
  } {
    const unidadLower = this.unidadElegida.toLowerCase();

    // Agrupar registros por participante y semana (año + número semana)
    type Acumulador = { sumaPeso: number; count: number; fechaInicioSemana: Date };
    const agrupados: {
      [participante: string]: { [semanaKey: string]: Acumulador };
    } = {};

    this.pesoData.forEach((registro) => {
      if (!registro.fechaCreacion) return;
      const participante = registro.participante?.nombre || 'Sin nombre';
      const fechaRegistro = new Date(registro.fechaCreacion);
      const year = fechaRegistro.getFullYear();
      const weekNum = this.getISOWeek(fechaRegistro);
      const semanaKey = `${year}-W${weekNum.toString().padStart(2, '0')}`;

      const fechaInicioSemana = this.getStartOfWeek(fechaRegistro);

      if (!agrupados[participante]) agrupados[participante] = {};
      if (!agrupados[participante][semanaKey])
        agrupados[participante][semanaKey] = {
          sumaPeso: 0,
          count: 0,
          fechaInicioSemana,
        };

      const peso = unidadLower === 'kg' ? registro.pesoKg : registro.pesoLb;
      agrupados[participante][semanaKey].sumaPeso += peso;
      agrupados[participante][semanaKey].count += 1;
    });

    // Obtener todas las semanas distintas de todos los participantes
    const todasLasSemanasSet = new Set<string>();
    const semanaKeyToFecha = new Map<string, Date>();

    Object.values(agrupados).forEach((semanas) => {
      Object.entries(semanas).forEach(([semanaKey, acc]) => {
        todasLasSemanasSet.add(semanaKey);
        semanaKeyToFecha.set(semanaKey, acc.fechaInicioSemana);
      });
    });

    // Ordenar semanas por fecha (ascendente)
    const todasLasSemanasOrdenadas = Array.from(todasLasSemanasSet).sort((a, b) => {
      const fechaA = semanaKeyToFecha.get(a)!.getTime();
      const fechaB = semanaKeyToFecha.get(b)!.getTime();
      return fechaA - fechaB;
    });

    // Tomar sólo las últimas 8 semanas con datos
    const ultimas8Semanas = todasLasSemanasOrdenadas.slice(-8);

    // Preparar etiquetas (fechas de inicio de semana en formato 'dd MMM yyyy')
    const etiquetas = ultimas8Semanas.map(
      (semKey) =>
        semanaKeyToFecha.get(semKey)!.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
    );

    // Construir resultado por participante
    const resultado: {
      [key: string]: { labels: string[]; values: (number | null)[] };
    } = {};

    Object.entries(agrupados).forEach(([participante, semanas]) => {
      resultado[participante] = { labels: etiquetas, values: [] };
      ultimas8Semanas.forEach((semKey) => {
        if (semanas[semKey]) {
          const promedio = semanas[semKey].sumaPeso / semanas[semKey].count;
          resultado[participante].values.push(+promedio.toFixed(2));
        } else {
          resultado[participante].values.push(null);
        }
      });
    });

    return resultado;
  }

  obtenerLabelsGlobales(): string[] {
    const datosFormateados = this.obtenerDatosFormateadosPorParticipante();
    const primerParticipante = Object.keys(datosFormateados)[0];
    return primerParticipante ? datosFormateados[primerParticipante].labels : [];
  }

  private getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    start.setDate(date.getDate() + diff);
    return start;
  }

  private getISOWeek(date: Date): number {
    const tmpDate = new Date(date);
    tmpDate.setHours(0, 0, 0, 0);
    tmpDate.setDate(tmpDate.getDate() + 3 - ((tmpDate.getDay() + 6) % 7));
    const week1 = new Date(tmpDate.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((tmpDate.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) /
          7
      )
    );
  }
}
