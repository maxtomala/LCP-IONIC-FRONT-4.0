import { Component, Input } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';

@Component({
  selector: 'app-carrusel-caracteristicas-lc',
  templateUrl: './carrusel-caracteristicas-lc.component.html',
  styleUrls: ['./carrusel-caracteristicas-lc.component.scss'],
})
export class CarruselCaracteristicasLcComponent    {
  @Input() liga: LigaCorporal | null = null; //para q reciba la liga


  constructor(

  ) {}


}
