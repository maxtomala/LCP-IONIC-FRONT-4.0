import { Component, Input, OnInit } from '@angular/core';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';

@Component({
  selector: 'app-carrusel-caracteristicas-lcp',
  templateUrl: './carrusel-caracteristicas-lcp.component.html',
  styleUrls: ['./carrusel-caracteristicas-lcp.component.scss'],
})
export class CarruselCaracteristicasLcpComponent  implements OnInit {
  @Input() liga: LigaCorporalProfesional | null = null; //para q reciba la liga

  constructor() { }

  ngOnInit() {}

}
