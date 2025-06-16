import { Component, OnInit } from '@angular/core';
import { SelectChangeEventDetail } from '@ionic/angular';
import { IonSelectCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-e-quiniela-ganadores-lcp',
  templateUrl: './e-quiniela-ganadores-lcp.page.html',
  styleUrls: ['./e-quiniela-ganadores-lcp.page.scss'],
})
export class EQuinielaGanadoresLcpPage implements OnInit {
  selectedParticipante: any;
  ganadoresPorJornada: { [jornada: number]: { ganadores: any[] } } | null =
    null;
  plantillas: any[] = []; // Aquí se almacenan las plantillas de quiniela

  jornadaActual: any;
  participantes: any;

  ligaSeleccionada: boolean = true; // Cambia a true o false según el caso
  jornadas: number[] = [1, 2, 3]; // Ejemplo de jornadas
  resultadosQuiniela: any;
  errorMessage: any;

  constructor() {}

  ngOnInit() {
    this.cargarPlantillas(); // Cargar las plantillas al iniciar el componente
    this.cargarGanadoresPorJornada();
  }
  onParticipanteChange(
    $event: IonSelectCustomEvent<SelectChangeEventDetail<any>>
  ) {
    throw new Error('Method not implemented.');
  }
  cambiarJornada(arg0: any) {
    throw new Error('Method not implemented.');
  }
  accionBoton(arg0: string) {
    throw new Error('Method not implemented.');
  }
  cargarGanadoresPorJornada() {
    // Simulación de carga de datos
    this.ganadoresPorJornada = {
      1: {
        ganadores: [
          { nombre: 'Juan Pérez', img:  'assets/perfil/2.jpg' },
          { nombre: 'María López', img:  'assets/perfil/7.jpg' },
        ],
      },
      2: {
        ganadores: [
          { nombre: 'Pedro García', img:  'assets/perfil/7.jpg' },
        ],
      },
      3: {
        ganadores: [], // Sin ganadores en esta jornada
      },
    };
  }

  cargarPlantillas() {
    // Datos de ejemplo
    this.participantes = [
      { id: 1, nombre: 'Juan Antonio' },
      { id: 2, nombre: 'Lucia Barraca' },
      { id: 3, nombre: 'Mario Rodriguez' },
    ];

    this.resultadosQuiniela = {
      fechaInicio: new Date(),
      fechaFinal: new Date(new Date().setDate(new Date().getDate() + 7)),
      quinielas: [
        {
          emparejamiento: {
            id: 1,
            participantes: [
              { nombre: 'Juan Antonio', img: 'assets/perfil/2.jpg' },
              { nombre: 'Lucia Barraca', img: 'assets/perfil/7.jpg' },
            ],
          },
          resultado: null,
        },
        {
          emparejamiento: {
            id: 2,
            participantes: [
              { nombre: 'Mario Rodriguez', img: 'assets/perfil/d5.jpg' },
              { nombre: 'Ana Perez', img: 'assets/perfil/d6.png' },
            ],
          },
          resultado: null,
        },
      ],
    };
  }
}
