import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-lcp',
  templateUrl: './crear-lcp.component.html',
  styleUrls: ['./crear-lcp.component.scss'],
})
export class CrearLcpComponent  implements OnInit {
crearLigaCorporal() {
throw new Error('Method not implemented.');
}
paises: string[] = ['México', 'Argentina', 'España', 'Colombia', 'Chile', 'Perú'];
  opcionesObjetivo = ['Reducir peso', 'Aumentar masa', 'Mantener salud', 'Otro'];

  constructor() { }

  ngOnInit() {}

}
