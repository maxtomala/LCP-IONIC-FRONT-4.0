import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apuestas-lcp',
  templateUrl: './apuestas-lcp.component.html',
  styleUrls: ['./apuestas-lcp.component.scss'],
})
export class ApuestasLcpComponent  implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}

  plantillas: any[] = []; // Aquí van las plantillas de los emparejamientos
  jornadaActual: number = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulación de datos de ejemplo
    this.cargarPlantillas();
  }

  cargarPlantillas() {
    // Este método debe llamarse desde un servicio real con la jornadaActual y la liga
    // Aquí un mock de ejemplo:
    this.plantillas = [
      {
        emparejamiento: {
          id: 1,
          fechaInicio: new Date(),
          fechaFinal: new Date(),
          participantes: [
            { nombre: 'Jugador 1', img: 'jugador1.jpg' },
            { nombre: 'Jugador 2', img: 'jugador2.jpg' }
          ]
        },
        resultado: ''
      },
      {
        emparejamiento: {
          id: 2,
          fechaInicio: new Date(),
          fechaFinal: new Date(),
          participantes: [
            { nombre: 'Jugador 3', img: 'jugador3.jpg' },
            { nombre: 'Jugador 4', img: 'jugador4.jpg' }
          ]
        },
        resultado: ''
      }
    ];
  }

  cambiarJornada(nuevaJornada: number) {
    if (nuevaJornada < 1) return;
    this.jornadaActual = nuevaJornada;
    this.cargarPlantillas(); // Debería volver a cargar los datos desde el servidor
  }

  guardarResultados() {
    const resultados = this.plantillas.map(p => ({
      idEmparejamiento: p.emparejamiento.id,
      resultado: p.resultado
    }));

    // Aquí llamarías al servicio que guarda los resultados en backend
    console.log('Resultados guardados:', resultados);
  }
}
