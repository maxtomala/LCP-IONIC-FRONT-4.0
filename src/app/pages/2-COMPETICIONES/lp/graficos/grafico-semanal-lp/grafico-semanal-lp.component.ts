import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-grafico-semanal-lp',
  templateUrl: './grafico-semanal-lp.component.html',
  styleUrls: ['./grafico-semanal-lp.component.scss'],
})


export class GraficoSemanalLpComponent implements OnInit {
  @ViewChild('lineChartSemanal', { static: true }) chartRef!: ElementRef;
  chart: Chart | null = null;
  public usuario: Usuario;
  public pesoData: any[] = [];
  public unidadElegida: string = 'kg';

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLpService: RegistroPesoLpService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = (this.usuario?.unidad || 'kg').toLowerCase();
    this.cargarDatosYGraficar();
  }

  private cargarDatosYGraficar() {
    const uid = this.usuarioService.usuario.uid;
    this.registroPesoLpService.obtenertodosPesosUsuario(uid).subscribe(
      (pesos) => {
        console.log('Pesos recibidos para gráfico semanal:', pesos);
        this.pesoData = pesos;
        if (pesos && pesos.length > 0) {
          this.graficaLinealSemanal();
        } else {
          console.warn('No hay datos de peso para las últimas semanas.');
        }
      },
      (error) => console.error('Error al obtener pesos:', error)
    );
  }

  private obtenerLunes(fecha: Date): Date {
    const d = new Date(fecha);
    const day = d.getDay();
    const diff = (day + 6) % 7;
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - diff);
    return d;
  }

  private obtenerDatosSemanal(): { labels: string[]; values: number[] } {
    const unidadLower = (this.unidadElegida || 'kg').toLowerCase();
    const hoy = new Date();
    const lunesActual = this.obtenerLunes(hoy);

    const labels: string[] = [];
    const values: number[] = [];

    for (let i = 7; i >= 0; i--) {
      const semanaInicio = new Date(lunesActual);
      semanaInicio.setDate(lunesActual.getDate() - 7 * i);
      semanaInicio.setHours(0, 0, 0, 0);
      const semanaFin = new Date(semanaInicio);
      semanaFin.setDate(semanaInicio.getDate() + 7);
      semanaFin.setHours(0, 0, 0, 0);

      const registrosSemana = this.pesoData.filter(item => {
        if (!item.fechaCreacion) return false;
        const fecha = new Date(item.fechaCreacion);
        return fecha >= semanaInicio && fecha < semanaFin;
      });

      let media: number | null = null;
      if (registrosSemana.length > 0) {
        const suma = registrosSemana.reduce((acc, item) => {
          const peso = unidadLower === 'lb' ? item.pesoLb : item.pesoKg;
          return acc + (typeof peso === 'number' ? peso : 0);
        }, 0);
        media = Number((suma / registrosSemana.length).toFixed(2));
      } else {
        media = null;
      }

      const etiquetaFecha = new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'short'
      }).format(semanaInicio);

      labels.push(etiquetaFecha);
      values.push(media);
    }
    console.log('Datos semanales:', { labels, values });
    return { labels, values };
  }

  graficaLinealSemanal(): void {
    const nombreUsuario = this.usuario?.nombre || 'Usuario';
    const unidadLower = (this.unidadElegida || 'kg').toLowerCase();
    const etiqueta = `${nombreUsuario} - Peso promedio semanal (${unidadLower})`;
    const { labels, values } = this.obtenerDatosSemanal();

    if (this.chart) {
      this.chart.data.labels = labels;
      if (this.chart.data.datasets.length > 0) {
        this.chart.data.datasets[0].data = values;
        this.chart.data.datasets[0].label = etiqueta;
      }
      this.chart.update();
    } else {
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: etiqueta,
            data: values,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.1,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: {
              callbacks: {
                title: (tooltipItems) => `Semana de: ${tooltipItems[0].label}`,
                label: (tooltipItem) => {
                  const val = tooltipItem.raw as number | null;
                  if (val === null) {
                    return 'Sin datos';
                  }
                  return `Promedio: ${val.toFixed(2)} ${unidadLower}`;
                }
              }
            }
          },
          scales: {
            x: {
              title: { display: true, text: 'Lunes de cada semana' }
            },
            y: {
              title: { display: true, text: `Peso (${unidadLower})` },
              beginAtZero: false
            }
          }
        }
      });
    }
  }
}
