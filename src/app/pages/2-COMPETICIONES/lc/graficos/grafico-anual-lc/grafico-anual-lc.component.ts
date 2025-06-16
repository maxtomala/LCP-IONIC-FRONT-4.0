import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import Chart from 'chart.js/auto';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';

@Component({
  selector: 'app-grafico-anual-lc',
  templateUrl: './grafico-anual-lc.component.html',
  styleUrls: ['./grafico-anual-lc.component.scss'],
})
export class GraficoAnualLcComponent implements AfterViewInit, AfterViewChecked,OnChanges {
  @Input() liga: LigaCorporal | null = null;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga) {
      console.log('Nueva liga seleccionada:', this.liga.nombre);
      // this.cargarDatos(); // aquí va tu lógica para cargar los datos de la gráfica
    }
  }

  ngAfterViewChecked(): void {
      // Aquí puedes poner lógica para renderizar el gráfico solo si no está ya creado
  console.log('Hola mundo');

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

