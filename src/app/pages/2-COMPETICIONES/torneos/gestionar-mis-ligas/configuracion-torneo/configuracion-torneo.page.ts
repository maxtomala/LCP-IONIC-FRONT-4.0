import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-torneo',
  templateUrl: './configuracion-torneo.page.html',
  styleUrls: ['./configuracion-torneo.page.scss'],
})
export class ConfiguracionTorneoPage implements OnInit {

  constructor(public navCtrl: NavController ) {}

  ngOnInit() {
  }
    volver() {
    this.navCtrl.back();
  }

}



