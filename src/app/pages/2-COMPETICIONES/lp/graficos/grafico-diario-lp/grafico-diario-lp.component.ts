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
  selector: 'app-grafico-diario-lp',
  templateUrl: './grafico-diario-lp.component.html',
  styleUrls: ['./grafico-diario-lp.component.scss'],
})
export class GraficoDiarioLpComponent implements OnInit {
  @ViewChild('lineChart', { static: true }) chartRef!: ElementRef;
  chart: Chart | null = null;
  public usuario: Usuario;
  public pesoData: any[] = [];
  public unidadElegida: string = 'kg';

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLpService: RegistroPesoLpService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    // normalizar unidad
    this.unidadElegida = (this.usuario?.unidad || 'kg').toLowerCase();
    this.obtenerTodosLosPesos();
  }

  obtenerTodosLosPesos() {
    const uid = this.usuarioService.usuario.uid;
    this.registroPesoLpService.obtenertodosPesosUsuario(uid).subscribe(
      (pesos) => {
        console.log('Pesos recibidos:', pesos);
        this.pesoData = pesos;
        if (pesos && pesos.length > 0) {
          this.graficaLinealDiario();
        }
      },
      (error) => console.error('Error al obtener pesos:', error)
    );
  }

  private obtenerDatosFormateados(): { labels: string[], values: number[] } {
    const unidadLower = this.unidadElegida.toLowerCase();
    const sortedData = this.pesoData
      .filter(item => item.fechaCreacion)
      .sort((a, b) => new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime());

    const labels = sortedData.map(item =>
      new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short' })
        .format(new Date(item.fechaCreacion))
    );
    const values = sortedData.map(item =>
      unidadLower === 'lb' ? item.pesoLb : item.pesoKg
    );
    console.log('Labels:', labels, 'Values según unidad', unidadLower, ':', values);
    return { labels, values };
  }

  graficaLinealDiario(): void {
    const nombreUsuario = this.usuario?.nombre || 'Usuario';
    const unidadLower = this.unidadElegida.toLowerCase();
    const etiqueta = `${nombreUsuario} - Peso (${unidadLower})`;

    const { labels, values } = this.obtenerDatosFormateados();

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
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: {
              callbacks: {
                title: (tooltipItems) => `Fecha: ${tooltipItems[0].label}`,
                label: (tooltipItem) => `Peso: ${tooltipItem.formattedValue} ${unidadLower}`
              }
            }
          },
          scales: {
            x: { title: { display: true, text: 'Fecha' } },
            y: { title: { display: true, text: `Peso (${unidadLower})` }, beginAtZero: true }
          }
        }
      });
    }
  }
}
