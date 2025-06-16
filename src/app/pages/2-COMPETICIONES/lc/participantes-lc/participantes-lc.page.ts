import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-participantes-lc',
  templateUrl: './participantes-lc.page.html',
  styleUrls: ['./participantes-lc.page.scss'],
})
export class ParticipantesLcPage implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}
buscar(arg0: string|number) {
throw new Error('Method not implemented.');
}
  participantes: any[] = [];
  usuariosTemp: any[] = [];
  cargando2 = false;
  ligaCorporalprofesional = [
    { nombre: 'familia' },
    { nombre: 'gimnasio ' },


  ];


  constructor(
        public navCtrl: NavController,
    
  ) {

  }

  ngOnInit() {
    this.cargarParticipantes();
  }

  cargarParticipantes() {
    this.cargando2 = true;

    // Simulación de petición al backend
    setTimeout(() => {
      this.participantes = [
        {
          nombre: 'Ana García',
          genero: 'Femenino',
          pais: 'España',
          fechaNacimiento: new Date(1990, 4, 15),
          altura: 1.68,
          deporte: 'Running',
          instagram: '@anagarcia',
          objetivo: 'Perder peso',
          fraseCelebre: 'No pain, no gain.',
          img: '/assets/images/users/1.jpg'
        },
        {
          nombre: 'Carlos Pérez',
          genero: 'Masculino',
          pais: 'México',
          fechaNacimiento: new Date(1985, 1, 20),
          altura: 1.75,
          deporte: 'Natación',
          instagram: '@carlospz',
          objetivo: 'Ganar masa muscular',
          fraseCelebre: 'Siempre adelante.',
          img: '/assets/images/users/5.jpg'
        },
        // Agrega más participantes según lo necesites
      ];

      this.usuariosTemp = [...this.participantes];
      this.cargando2 = false;
    }, 1000);
  }

    volver() {
    this.navCtrl.back();
  }


}
