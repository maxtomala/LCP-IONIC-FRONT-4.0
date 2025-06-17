import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcService } from 'src/app/services/lc/registro-peso-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grafico-mensual-lc',
  templateUrl: './grafico-mensual-lc.component.html',
  styleUrls: ['./grafico-mensual-lc.component.scss'],
})
export class GraficoMensualLcComponent implements OnInit, OnChanges {
@ViewChild('lineChart', { static: false }) lineChartRef!: ElementRef;
  @Input() liga: LigaCorporal | null = null;

  chart: Chart | null = null;
  public usuario: Usuario;
  public pesoData: any[] = [];
  public unidadElegida: string = 'kg';

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLcService: RegistroPesoLcService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga) {
      console.log('Nueva liga seleccionada:', this.liga.nombre);
      this.obtenerTodosLosPesos();
    }
  }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = (this.usuario?.unidad || 'kg').toLowerCase();
    this.obtenerTodosLosPesos();
  }

  obtenerTodosLosPesos() {
    if (!this.liga?._id) return;

    this.registroPesoLcService
      .obtenerPesosParticipantesGrafica(this.liga._id)
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
        spanGaps: true,
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
            text: 'Evolución mensual del peso por participante',
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Mes: ${tooltipItems[0].label}`,
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
              text: 'Mes (día 1)',
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

    type Acumulador = { sumaPeso: number; count: number; fechaInicioMes: Date };
    const agrupados: {
      [participante: string]: { [mesKey: string]: Acumulador };
    } = {};

    this.pesoData.forEach((registro) => {
      if (!registro.fechaCreacion) return;
      const participante = registro.participante?.nombre || 'Sin nombre';
      const fechaRegistro = new Date(registro.fechaCreacion);
      const year = fechaRegistro.getFullYear();
      const month = fechaRegistro.getMonth() + 1; // 1-12
      const mesKey = `${year}-${month.toString().padStart(2, '0')}`;

      // Fecha primer día del mes
      const fechaInicioMes = new Date(year, month - 1, 1);

      if (!agrupados[participante]) agrupados[participante] = {};
      if (!agrupados[participante][mesKey])
        agrupados[participante][mesKey] = {
          sumaPeso: 0,
          count: 0,
          fechaInicioMes,
        };

      const peso = unidadLower === 'kg' ? registro.pesoKg : registro.pesoLb;
      agrupados[participante][mesKey].sumaPeso += peso;
      agrupados[participante][mesKey].count += 1;
    });

    // Obtener todas las claves de meses con datos y fechas
    const todosLosMesesSet = new Set<string>();
    const mesKeyToFecha = new Map<string, Date>();

    Object.values(agrupados).forEach((meses) => {
      Object.entries(meses).forEach(([mesKey, acc]) => {
        todosLosMesesSet.add(mesKey);
        mesKeyToFecha.set(mesKey, acc.fechaInicioMes);
      });
    });

    // Ordenar meses por fecha ascendente
    const todosLosMesesOrdenados = Array.from(todosLosMesesSet).sort((a, b) => {
      const fechaA = mesKeyToFecha.get(a)!.getTime();
      const fechaB = mesKeyToFecha.get(b)!.getTime();
      return fechaA - fechaB;
    });

    // Tomar solo los últimos 8 meses con datos
    const ultimos8Meses = todosLosMesesOrdenados.slice(-8);

    // Preparar etiquetas para el gráfico (formato 'MMM yyyy' o 'dd MMM yyyy' con día 1)
    const etiquetas = ultimos8Meses.map((mesKey) =>
      mesKeyToFecha.get(mesKey)!.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    );

    // Construir resultado por participante
    const resultado: {
      [key: string]: { labels: string[]; values: (number | null)[] };
    } = {};

    Object.entries(agrupados).forEach(([participante, meses]) => {
      resultado[participante] = { labels: etiquetas, values: [] };
      ultimos8Meses.forEach((mesKey) => {
        if (meses[mesKey]) {
          const promedio = meses[mesKey].sumaPeso / meses[mesKey].count;
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
}
