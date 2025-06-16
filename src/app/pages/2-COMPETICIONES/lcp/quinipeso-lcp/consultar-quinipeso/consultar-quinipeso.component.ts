import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-quinipeso',
  templateUrl: './consultar-quinipeso.component.html',
  styleUrls: ['./consultar-quinipeso.component.scss'],
})
export class ConsultarQuinipesoComponent  implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}

 participantes = [
    { id: 1, nombre: 'Juan Pérez', img: 'juan.jpg' },
    { id: 2, nombre: 'Ana Gómez', img: 'ana.jpg' },
    { id: 3, nombre: 'Carlos Ruiz', img: 'carlos.jpg' },
  ];

  jornadaActual: number = 1;
  errorMessage: string = '';
  resultadosQuiniela: any = null;

  ngOnInit() {
    this.cargarResultados();
  }

  onParticipanteChange(event: any) {
    const participanteId = event.detail ? event.detail.value : event.target.value;
    console.log('Participante seleccionado:', participanteId);
    // Aquí puedes hacer algo con el participante seleccionado
  }

  cambiarJornada(nuevaJornada: number) {
    if (nuevaJornada < 1) {
      this.errorMessage = 'Ya estás en la primera jornada.';
      return;
    }
    // Aquí podrías añadir un límite máximo si existe
    this.jornadaActual = nuevaJornada;
    this.errorMessage = '';
    this.cargarResultados();
  }

  cargarResultados() {
    // Simula obtener resultados para la jornada actual (puedes cambiar esto por llamada a API)
    this.resultadosQuiniela = {
      fechaInicio: new Date(2024, 3, 1),
      fechaFinal: new Date(2024, 3, 30),
      quinielas: [
        {
          emparejamiento: {
            id: 101,
            participantes: [
              { nombre: 'Equipo A', img: 'equipoA.jpg' },
              { nombre: 'Equipo B', img: 'equipoB.jpg' },
            ],
          },
          resultado: '1',
        },
        {
          emparejamiento: {
            id: 102,
            participantes: [
              { nombre: 'Equipo C', img: 'equipoC.jpg' },
              { nombre: 'Equipo D', img: 'equipoD.jpg' },
            ],
          },
          resultado: 'x',
        },
      ],
    };
  }
}
