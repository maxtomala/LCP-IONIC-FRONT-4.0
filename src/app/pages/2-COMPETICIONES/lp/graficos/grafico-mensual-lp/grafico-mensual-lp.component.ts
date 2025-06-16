import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-grafico-mensual-lp',
  templateUrl: './grafico-mensual-lp.component.html',
  styleUrls: ['./grafico-mensual-lp.component.scss'],
})
export class GraficoMensualLpComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChartMensual', { static: false }) chartRef!: ElementRef;
  chart: Chart | null = null;
  public usuario: Usuario;
  public pesoData: any[] = [];
  public unidadElegida: string = 'kg';

  private datosListos = false;

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLpService: RegistroPesoLpService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {
    this.unidadElegida = (this.usuario?.unidad || 'kg').toLowerCase();
    const uid = this.usuarioService.usuario.uid;
    this.registroPesoLpService.obtenertodosPesosUsuario(uid).subscribe(
      (pesos) => {
        this.pesoData = pesos;
        this.datosListos = true;
        if (this.chartRef) {
          this.graficaLinealMensual();
        }
      },
      (error) => console.error('Error al obtener pesos:', error)
    );
  }

  ngAfterViewInit() {
    if (this.datosListos) {
      this.graficaLinealMensual();
    }
  }

  private obtenerDatosMensuales(): { labels: string[]; values: (number | null)[] } {
    const unidadLower = this.unidadElegida.toLowerCase();
    const labels: string[] = [];
    const values: (number | null)[] = [];

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    for (let i = 11; i >= 0; i--) {
      const mesInicio = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);
      const mesFin = new Date(mesInicio.getFullYear(), mesInicio.getMonth() + 1, 1);

      const registrosMes = this.pesoData.filter(item => {
        if (!item.fechaCreacion) return false;
        const fecha = new Date(item.fechaCreacion);
        return fecha >= mesInicio && fecha < mesFin;
      });

      let media: number | null = null;
      if (registrosMes.length > 0) {
        const suma = registrosMes.reduce((acc, item) => {
          const peso = unidadLower === 'lb' ? item.pesoLb : item.pesoKg;
          return acc + (typeof peso === 'number' ? peso : 0);
        }, 0);
        media = Number((suma / registrosMes.length).toFixed(2));
      }

      const etiquetaFecha = new Intl.DateTimeFormat('es-ES', {
        month: 'short',
        year: 'numeric'
      }).format(mesInicio);

      labels.push(etiquetaFecha);
      values.push(media);
    }

    console.log('Datos mensuales:', { labels, values });
    return { labels, values };
  }

  graficaLinealMensual(): void {
    if (!this.chartRef) {
      console.warn('chartRef no está listo aún');
      return;
    }

    const nombreUsuario = this.usuario?.nombre || 'Usuario';
    const unidadLower = this.unidadElegida.toLowerCase();
    const etiqueta = `${nombreUsuario} - Peso promedio mensual (${unidadLower})`;

    const { labels, values } = this.obtenerDatosMensuales();

    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: etiqueta,
          data: values,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
          tension: 0.1,
          pointBackgroundColor: 'rgba(153, 102, 255, 1)',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Mes: ${tooltipItems[0].label}`,
              label: (tooltipItem) => {
                const val = tooltipItem.raw as number | null;
                return val === null ? 'Sin datos' : `Promedio: ${val.toFixed(2)} ${unidadLower}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Mes' }
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
