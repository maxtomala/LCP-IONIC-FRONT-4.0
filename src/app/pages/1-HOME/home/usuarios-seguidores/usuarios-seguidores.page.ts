import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios-seguidores',
  templateUrl: './usuarios-seguidores.page.html',
  styleUrls: ['./usuarios-seguidores.page.scss'],
})
export class UsuariosSeguidoresPage implements OnInit {
seguidores = [
  {
    nombre: 'Ana López',
    correo: 'ana@example.com',
    imagen: 'assets/images/users/ana.jpg',
    descripcion: 'Me encantan los libros de ciencia ficción.',
    siguiendo: false,
    teSigue: true,
  },
  {
    nombre: 'Carlos Ruiz',
    correo: 'carlos@example.com',
    imagen: 'assets/images/users/2.jpg',
    descripcion: 'Programador full-stack. Café 24/7 ☕️',
    siguiendo: true,
    teSigue: false,
  },
];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
  }
  seguirUsuario(user) {
  user.siguiendo = true;
  // aquí puedes llamar a tu servicio para persistir este cambio
}
    volver() {
    this.navCtrl.back();
  }

}
