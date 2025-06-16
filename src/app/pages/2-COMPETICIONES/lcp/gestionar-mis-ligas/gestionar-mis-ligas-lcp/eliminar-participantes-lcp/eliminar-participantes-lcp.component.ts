import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-eliminar-participantes-lcp',
  templateUrl: './eliminar-participantes-lcp.component.html',
  styleUrls: ['./eliminar-participantes-lcp.component.scss'],
})
export class EliminarParticipantesLcpComponent  implements OnInit {


   ligaCorporal = [
    {
     img: '/assets/perfil/2.jpg',
      nombre: 'Juan',
      apellidos: 'Pérez García',
    },
    {
      img: '/assets/perfil/2.jpg',
      nombre: 'Ana',
      apellidos: 'López Martínez',
    },
    {
     img: '/assets/perfil/2.jpg',
      nombre: 'Carlos',
      apellidos: 'Fernández Ruiz',
    },
    {
      img: '/assets/perfil/2.jpg',
      nombre: 'María',
      apellidos: 'Torres Sánchez',
    },
    {
      img: '/assets/perfil/2.jpg',
      nombre: 'Luis',
      apellidos: 'Martínez Ortega',
    },
  ];

ngOnInit() {

  }

 participantes = [
    {
      id: 1,
      nombre: 'Liga Fitness',
      fechaCreacion: new Date('2024-01-15'),
      objetivo: 'Mejorar condición física',
      enlaceInvitacion: 'https://miapp.com/invitar/1',
      participantes: [
        {
          id: 101,
          nombre: 'Ana',
          apellido1: 'García',
          apellido2: 'López',
          img: 'ana.jpg',
        },
        {
          id: 102,
          nombre: 'Carlos',
          apellido1: 'Martínez',
          apellido2: 'Pérez',
          img: 'carlos.jpg',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Liga Yoga',
      fechaCreacion: new Date('2024-03-20'),
      objetivo: 'Relajación y flexibilidad',
      enlaceInvitacion: 'https://miapp.com/invitar/2',
      participantes: [
        {
          id: 103,
          nombre: 'Laura',
          apellido1: 'Sánchez',
          apellido2: 'Fernández',
          img: 'laura.jpg',
        },
      ],
    },
  ];

  constructor(private navCtrl: NavController) {}


  volver() {
    this.navCtrl.back();
  }



    eliminarParticipanteDeLiga(liga: any, participante: any) {
    const index = liga.participantes.findIndex((p: any) => p.id === participante.id);
    if (index > -1) {
      liga.participantes.splice(index, 1);
    }

  }
}
