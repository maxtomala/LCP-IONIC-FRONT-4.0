import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalizados-lcp',
  templateUrl: './penalizados-lcp.component.html',
  styleUrls: ['./penalizados-lcp.component.scss'],
})
export class PenalizadosLcpComponent  implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}


  ligaSeleccionada = true;
  jornadas: number[] = [];
  penalizadosPorJornada: { [key: number]: { penalizados: any[] } } = {};

  ngOnInit() {
    this.generarJornadas();
    this.obtenerPenalizadosPorJornada();
  }

  generarJornadas() {
    this.jornadas = Array.from({ length: 5 }, (_, i) => i + 1); // Jornadas 1 a 5
  }

  obtenerPenalizadosPorJornada() {
this.penalizadosPorJornada = {
  1: {
    penalizados: [
      {
        nombre: 'Pedro García',
        img: 'pedro.jpg',
        penalizadoPorNombre: 'Juan Pérez',
        penalizadoPorImg: 'juan.jpg'
      },
      {
        nombre: 'Laura Sánchez',
        img: 'laura.jpg',
        penalizadoPorNombre: 'Ana Gómez',
        penalizadoPorImg: 'ana.jpg'
      }
    ]
  },
  2: {
    penalizados: []
  },
  3: {
    penalizados: [
      {
        nombre: 'Mario López',
        img: 'mario.jpg',
        penalizadoPorNombre: 'Carlos Ruiz',
        penalizadoPorImg: 'carlos.jpg'
      }
    ]
  }
};

}
}

