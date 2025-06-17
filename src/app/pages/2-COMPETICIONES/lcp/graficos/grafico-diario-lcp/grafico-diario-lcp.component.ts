import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico-diario-lcp',
  templateUrl: './grafico-diario-lcp.component.html',
  styleUrls: ['./grafico-diario-lcp.component.scss'],
})
export class GraficoDiarioLcpComponent implements AfterViewInit, AfterViewChecked {

  ngAfterViewChecked(): void {
      // Aquí puedes poner lógica para renderizar el gráfico solo si no está ya creado

  }
 @ViewChild('lineChart', { static: false }) chartRef!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.chartRef?.nativeElement) {
        new Chart(this.chartRef.nativeElement, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
            datasets: [
              {
                label: 'Peso (kg)',
                data: [60, 59, 58.5, 58.8, 58],
                borderColor: '#3880ff',
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      }
    }, 0); // ⏱ Espera al próximo ciclo para asegurarte que el canvas ya está en el DOM
  }
}

