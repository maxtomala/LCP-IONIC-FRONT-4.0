import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-configuracion',
  templateUrl: './menu-configuracion.page.html',
  styleUrls: ['./menu-configuracion.page.scss'],
})
export class MenuConfiguracionPage implements OnInit {

  constructor(
     public navCtrl: NavController,

   ) {}
   ngOnInit() {
   }

   volver() {
     this.navCtrl.back();
   }

}
