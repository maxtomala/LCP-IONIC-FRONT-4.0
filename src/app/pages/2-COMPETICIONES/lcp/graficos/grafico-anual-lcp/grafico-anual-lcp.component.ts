import {Component,ElementRef,Input,OnChanges,OnInit,SimpleChanges,ViewChild,} from '@angular/core';
import Chart from 'chart.js/auto';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcpService } from 'src/app/services/lcp/registro-peso-lcp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grafico-anual-lcp',
  templateUrl: './grafico-anual-lcp.component.html',
  styleUrls: ['./grafico-anual-lcp.component.scss'],
})
export class GraficoAnualLcpComponent implements OnInit, OnChanges {
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
            text: 'Evolución anual del peso por participante',
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Año: ${tooltipItems[0].label}`,
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
              text: 'Año (1 de enero)',
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

    type Acumulador = { sumaPeso: number; count: number; fechaInicioAno: Date };
    const agrupados: {
      [participante: string]: { [anoKey: string]: Acumulador };
    } = {};

    this.pesoData.forEach((registro) => {
      if (!registro.fechaCreacion) return;
      const participante = registro.participante?.nombre || 'Sin nombre';
      const fechaRegistro = new Date(registro.fechaCreacion);
      const year = fechaRegistro.getFullYear();
      const anoKey = `${year}`;

      // Fecha 1 de enero del año
      const fechaInicioAno = new Date(year, 0, 1);

      if (!agrupados[participante]) agrupados[participante] = {};
      if (!agrupados[participante][anoKey])
        agrupados[participante][anoKey] = {
          sumaPeso: 0,
          count: 0,
          fechaInicioAno,
        };

      const peso = unidadLower === 'kg' ? registro.pesoKg : registro.pesoLb;
      agrupados[participante][anoKey].sumaPeso += peso;
      agrupados[participante][anoKey].count += 1;
    });

    // Obtener todos los años con datos y fechas
    const todosLosAniosSet = new Set<string>();
    const anoKeyToFecha = new Map<string, Date>();

    Object.values(agrupados).forEach((anios) => {
      Object.entries(anios).forEach(([anoKey, acc]) => {
        todosLosAniosSet.add(anoKey);
        anoKeyToFecha.set(anoKey, acc.fechaInicioAno);
      });
    });

    // Ordenar años ascendentemente
    const todosLosAniosOrdenados = Array.from(todosLosAniosSet).sort(
      (a, b) => +a - +b
    );

    // Tomar sólo los últimos 8 años con datos
    const ultimos8Anios = todosLosAniosOrdenados.slice(-8);

    // Preparar etiquetas para el gráfico (día 1 de enero de cada año)
    const etiquetas = ultimos8Anios.map((anoKey) =>
      anoKeyToFecha.get(anoKey)!.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    );

    // Construir resultado por participante
    const resultado: {
      [key: string]: { labels: string[]; values: (number | null)[] };
    } = {};

    Object.entries(agrupados).forEach(([participante, anios]) => {
      resultado[participante] = { labels: etiquetas, values: [] };
      ultimos8Anios.forEach((anoKey) => {
        if (anios[anoKey]) {
          const promedio = anios[anoKey].sumaPeso / anios[anoKey].count;
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
