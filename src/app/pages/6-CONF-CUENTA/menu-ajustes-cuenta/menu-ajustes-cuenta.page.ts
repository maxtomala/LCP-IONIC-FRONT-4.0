import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-ajustes-cuenta',
  templateUrl: './menu-ajustes-cuenta.page.html',
  styleUrls: ['./menu-ajustes-cuenta.page.scss'],
})
export class MenuAjustesCuentaPage implements OnInit {

  mostrarLateral: boolean = true;
  constructor(
    public navCtrl: NavController,

  ) {}
  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }

}
