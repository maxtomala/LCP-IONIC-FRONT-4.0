import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';
import Chart from 'chart.js/auto';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';


@Component({
  selector: 'app-grafico-diario-lc',
  templateUrl: './grafico-diario-lc.component.html',
  styleUrls: ['./grafico-diario-lc.component.scss'],
})
export class GraficoDiarioLcComponent  implements  AfterViewInit, OnChanges {
  @Input() liga: LigaCorporal | null = null;
ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga) {
      console.log('Nueva liga seleccionada:', this.liga.nombre);
      // this.cargarDatos(); // aquí va tu lógica para cargar los datos de la gráfica
    }
  }




  @ViewChild('lineChart', { static: false }) lineChartRef!: ElementRef;

  chart: Chart | undefined;
tipoGrafica: any;

  ngAfterViewInit() {
    this.createLineChart();
  }

  createLineChart() {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08'],
        datasets: [
          {
            label: 'pepe',
            data: [70, 72, 74, 76, 75, 73, 72, 71],
            borderColor: '#1e88e5',
            fill: false,
            tension: 0.3
          },
          {
            label: 'pepa',
            data: [65, 64, 63, 62, 60, 61, 60, 59],
            borderColor: '#e91e63',
            fill: false,
            tension: 0.3
          },
          {
            label: 'Pedro',
            data: [80, 78, 76, 74, 72, 70, 68, 67],
            borderColor: '#ff9800',
            fill: false,
            tension: 0.3
          },
          {
            label: 'pepin',
            data: [55, 58, 60, 62, 64, 65, 66, 67],
            borderColor: '#4caf50',
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });
  }
}
