import {Component,ElementRef,Input,OnChanges,OnInit,SimpleChanges,ViewChild,} from '@angular/core';
import Chart from 'chart.js/auto';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcService } from 'src/app/services/lc/registro-peso-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grafico-diario-lc',
  templateUrl: './grafico-diario-lc.component.html',
  styleUrls: ['./grafico-diario-lc.component.scss'],
})
export class GraficoDiarioLcComponent implements OnInit, OnChanges {
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

  // obtiene los datos de los utlimos 8semana
  crearGrafico() {
    if (this.chart) {
      this.chart.destroy(); // Destruir gráfico previo
    }

    const datosFormateados = this.obtenerDatosFormateadosPorParticipante();

    const datasets = Object.keys(datosFormateados).map((participanteNombre) => {
      const { labels, values } = datosFormateados[participanteNombre];

      return {
        label: participanteNombre,
        data: values,
        borderColor: this.getRandomColor(),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false, //es el relleno de la sombra q acompaña alos valores
        tension: 0.3,
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
            text: 'Evolución de peso por participante',
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Fecha: ${tooltipItems[0].label}`,
              label: (tooltipItem) =>
                `Peso: ${tooltipItem.formattedValue} ${this.unidadElegida}`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fecha',
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

  // Utilidad para colores aleatorios
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  obtenerDatosFormateadosPorParticipante(): {
    [key: string]: { labels: string[]; values: number[] };
  } {
    const unidadLower = this.unidadElegida.toLowerCase();
    const datosPorParticipante: {
      [key: string]: { labels: string[]; values: number[] };
    } = {};

    const ochoSemanasEnMs = 8 * 7 * 24 * 60 * 60 * 1000;
    const fechaLimite = new Date(Date.now() - ochoSemanasEnMs);

    const sortedData = this.pesoData
      .filter(
        (item) =>
          item.fechaCreacion && new Date(item.fechaCreacion) >= fechaLimite
      )
      .sort(
        (a, b) =>
          new Date(a.fechaCreacion).getTime() -
          new Date(b.fechaCreacion).getTime()
      );

    sortedData.forEach((registro) => {
      const participanteNombre = registro.participante?.nombre || 'Sin nombre';
      if (!datosPorParticipante[participanteNombre]) {
        datosPorParticipante[participanteNombre] = { labels: [], values: [] };
      }

      const labelFecha = new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'short',
      }).format(new Date(registro.fechaCreacion));

      const peso = unidadLower === 'kg' ? registro.pesoKg : registro.pesoLb;

      datosPorParticipante[participanteNombre].labels.push(labelFecha);
      datosPorParticipante[participanteNombre].values.push(peso);
    });

    return datosPorParticipante;
  }

  obtenerLabelsGlobales(): string[] {
    const ochoSemanasEnMs = 8 * 7 * 24 * 60 * 60 * 1000;
    const fechaLimite = new Date(Date.now() - ochoSemanasEnMs);

    const sortedDates = this.pesoData
      .filter(
        (item) =>
          item.fechaCreacion && new Date(item.fechaCreacion) >= fechaLimite
      )
      .sort(
        (a, b) =>
          new Date(a.fechaCreacion).getTime() -
          new Date(b.fechaCreacion).getTime()
      )
.map((item) =>
  new Intl.DateTimeFormat('es-ES', {
    weekday: 'long', // nombre completo del día: lunes, martes, etc.
    day: 'numeric',  // día numérico: 18, 19, etc.
  }).format(new Date(item.fechaCreacion))
);
    // Elimina duplicados
    return Array.from(new Set(sortedDates));
  }
}
