import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-lp',
  templateUrl: './configuracion-lp.page.html',
  styleUrls: ['./configuracion-lp.page.scss'],
})
export class ConfiguracionLpPage implements OnInit {


  mostrarFrontal: boolean = true;
  mostrarLateral: boolean = true;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.mostrarFrontal = localStorage.getItem('mostrarCarruselFrontal') !== 'false';
    this.mostrarLateral = localStorage.getItem('mostrarCarruselLateral') !== 'false';


  }
    guardarPreferencias() {
    localStorage.setItem('mostrarCarruselFrontal', String(this.mostrarFrontal));
    localStorage.setItem('mostrarCarruselLateral', String(this.mostrarLateral));
  }
  volver() {
    this.navCtrl.back();
  }


}
