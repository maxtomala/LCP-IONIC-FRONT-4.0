import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganadores-lcp',
  templateUrl: './ganadores-lcp.component.html',
  styleUrls: ['./ganadores-lcp.component.scss'],
})
export class GanadoresLcpComponent  implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}


  ligaSeleccionada = true; // Puedes controlar cuándo mostrar la info
  jornadas: number[] = [];
  ganadoresPorJornada: { [key: number]: { ganadores: any[] } } = {};

  constructor() {}

  ngOnInit() {
    this.generarJornadas();
    this.obtenerGanadoresPorJornada();
  }

  generarJornadas() {
    // Por ejemplo, jornadas del 1 al 5
    this.jornadas = Array.from({ length: 5 }, (_, i) => i + 1);
  }

  obtenerGanadoresPorJornada() {
    // Simulamos estructura de datos
    this.ganadoresPorJornada = {
      1: {
        ganadores: [
          { nombre: 'Juan Pérez', img: 'juan.jpg' },
          { nombre: 'Ana Gómez', img: 'ana.jpg' }
        ]
      },
      2: {
        ganadores: []
      },
      3: {
        ganadores: [
          { nombre: 'Carlos Ruiz', img: 'carlos.jpg' }
        ]
      },
      4: {
        ganadores: []
      },
      5: {
        ganadores: [
          { nombre: 'Luisa Martínez', img: 'luisa.jpg' }
        ]
      }
    };
  }

}
