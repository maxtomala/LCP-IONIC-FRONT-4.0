import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-siguiendo',
  templateUrl: './siguiendo.component.html',
  styleUrls: ['./siguiendo.component.scss'],
})
export class SiguiendoComponent  implements OnInit {
denunciarPost() {
throw new Error('Method not implemented.');
}
bloquear() {
throw new Error('Method not implemented.');
}
dejarDeSeguir() {
throw new Error('Method not implemented.');
}
eliminarPost() {
throw new Error('Method not implemented.');
}
usuarios = [
  {
    imagen: 'assets/images/users/1.jpg',
    nombre: 'Max Tomala',
    correo: 'max@example.com',
    descripcion: 'Fanático de series y tecnología. Amante de los retos creativos.'
  },
  {
    imagen: 'assets/images/users/2.jpg',
    nombre: 'Laura Gómez',
    correo: 'laura@example.com',
    descripcion: 'Desarrolladora web con pasión por el diseño UX/UI y los viajes.'
  },
  {
    imagen: 'assets/images/users/3.jpg',
    nombre: 'Carlos Rivera',
    correo: 'carlos@example.com',
    descripcion: 'Explorador digital. Compartiendo ideas y soluciones desde 2015.'
  }
];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

    volver() {
    this.navCtrl.back();
  }

}
