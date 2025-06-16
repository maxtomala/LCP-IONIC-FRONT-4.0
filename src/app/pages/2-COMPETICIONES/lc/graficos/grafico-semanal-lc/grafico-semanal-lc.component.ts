import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import Chart from 'chart.js/auto';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
@Component({
  selector: 'app-grafico-semanal-lc',
  templateUrl: './grafico-semanal-lc.component.html',
  styleUrls: ['./grafico-semanal-lc.component.scss'],
})
export class GraficoSemanalLcComponent  implements  OnChanges    {
  @Input() liga: LigaCorporal | null = null;
ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga) {
      console.log('Nueva liga seleccionada:', this.liga.nombre);
      // this.cargarDatos(); // aquí va tu lógica para cargar los datos de la gráfica
    }
  }

}
