import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-grafico-anual-lp',
  templateUrl: './grafico-anual-lp.component.html',
  styleUrls: ['./grafico-anual-lp.component.scss'],
})
export class GraficoAnualLpComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChartAnual', { static: false }) chartRef!: ElementRef;
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
          this.graficaLinealAnual();
        }
      },
      (error) => console.error('Error al obtener pesos:', error)
    );
  }

  ngAfterViewInit() {
    if (this.datosListos) {
      this.graficaLinealAnual();
    }
  }

  private obtenerDatosAnuales(): { labels: string[]; values: (number | null)[] } {
    const unidadLower = this.unidadElegida.toLowerCase();
    const labels: string[] = [];
    const values: (number | null)[] = [];

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    for (let i = 4; i >= 0; i--) {
      const año = hoy.getFullYear() - i;
      const inicioAño = new Date(año, 0, 1);
      const finAño = new Date(año + 1, 0, 1);

      const registrosAnio = this.pesoData.filter(item => {
        if (!item.fechaCreacion) return false;
        const fecha = new Date(item.fechaCreacion);
        return fecha >= inicioAño && fecha < finAño;
      });

      let media: number | null = null;
      if (registrosAnio.length > 0) {
        const suma = registrosAnio.reduce((acc, item) => {
          const peso = unidadLower === 'lb' ? item.pesoLb : item.pesoKg;
          return acc + (typeof peso === 'number' ? peso : 0);
        }, 0);
        media = Number((suma / registrosAnio.length).toFixed(2));
      }

      labels.push(año.toString());
      values.push(media);
    }

    console.log('Datos anuales:', { labels, values });
    return { labels, values };
  }

  graficaLinealAnual(): void {
    if (!this.chartRef) {
      console.warn('chartRef no está listo aún');
      return;
    }

    const nombreUsuario = this.usuario?.nombre || 'Usuario';
    const unidadLower = this.unidadElegida.toLowerCase();
    const etiqueta = `${nombreUsuario} - Peso promedio anual (${unidadLower})`;

    const { labels, values } = this.obtenerDatosAnuales();

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
          borderColor: 'rgba(255, 159, 64, 1)',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: true,
          tension: 0.1,
          pointBackgroundColor: 'rgba(255, 159, 64, 1)',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => `Año: ${tooltipItems[0].label}`,
              label: (tooltipItem) => {
                const val = tooltipItem.raw as number | null;
                return val === null ? 'Sin datos' : `Promedio: ${val.toFixed(2)} ${unidadLower}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Año' }
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
