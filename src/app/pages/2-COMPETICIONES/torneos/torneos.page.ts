import { Component, OnInit } from '@angular/core';
import { NavController,  } from '@ionic/angular';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.page.html',
  styleUrls: ['./torneos.page.scss'],
})
export class TorneosPage implements OnInit {
registroPesoLpForm: any;

  constructor(
        public navCtrl: NavController

  ) { }

  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }

    accionBoton(accion: string): void {
    console.log('Acción:', accion);
  }


  guardarPeso() {
    throw new Error('Method not implemented.');
  }

}
