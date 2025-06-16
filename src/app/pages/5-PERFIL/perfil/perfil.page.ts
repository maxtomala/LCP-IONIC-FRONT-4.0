import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {



  constructor(
    public navCtrl: NavController,
  ) {}


  volver() {
    this.navCtrl.back();
  }
}
