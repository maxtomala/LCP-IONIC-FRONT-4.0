import { Component, OnInit } from '@angular/core';


interface Participante {
  nombre: string;
  img: string; // URL o ruta de la imagen del participante
}
interface Emparejamiento {
  participantes: [Participante, Participante];
  puntosParticipante1: number;
  puntosParticipante2: number;
}

interface Jornada {
  jornada: string;
  fechaInicio: string;
  fechaFinal: string;
  emparejamientos: Emparejamiento[];
}

interface Liga {
  nombre: string;
}

interface Calendario {
  jornadas: Jornada[];
}
@Component({
  selector: 'app-e-calendario-lcp',
  templateUrl: './e-calendario-lcp.page.html',
  styleUrls: ['./e-calendario-lcp.page.scss'],
})
export class ECalendarioLcpPage implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}
 // Variables para almacenar la liga y calendario seleccionados
 ligaSeleccionada: Liga = { nombre: 'Liga Corporal Profesional' };
 calendario: Calendario;

 // Año actual para el encabezado
 year: number = new Date().getFullYear();

 constructor() {
   // Datos de ejemplo para el calendario
   this.calendario = {
     jornadas: [
       {
         jornada: 'Jornada 1',
         fechaInicio: '2024-09-01',
         fechaFinal: '2024-09-07',
         emparejamientos: [
           {
             participantes: [
               { nombre: 'Juan Pérez', img: 'assets/perfil/2.jpg' },
               { nombre: 'María López', img: 'assets/perfil/6.jpg' },
             ],
             puntosParticipante1: 3,
             puntosParticipante2: 1,
           },
           {
             participantes: [
               { nombre: 'Carlos Fernández', img: 'assets/perfil/7.jpg' },
               { nombre: 'Ana Gómez', img: 'assets/perfil/2.jpg' },
             ],
             puntosParticipante1: 2,
             puntosParticipante2: 2,
           },
         ],
       },
       {
        jornada: 'Jornada 2',
        fechaInicio: '2024-09-01',
        fechaFinal: '2024-09-07',
        emparejamientos: [
          {
            participantes: [
              { nombre: 'Juan Pérez', img: 'assets/perfil/2.jpg' },
              { nombre: 'María López', img: 'assets/perfil/6.jpg' },
            ],
            puntosParticipante1: 3,
            puntosParticipante2: 1,
          },
          {
            participantes: [
              { nombre: 'Carlos Fernández', img: 'assets/perfil/7.jpg' },
              { nombre: 'Ana Gómez', img: 'assets/perfil/2.jpg' },
            ],
            puntosParticipante1: 2,
            puntosParticipante2: 2,
          },
        ],
      },
     ],
   };
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
