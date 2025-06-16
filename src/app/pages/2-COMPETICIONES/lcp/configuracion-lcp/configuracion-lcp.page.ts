import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-lcp',
  templateUrl: './configuracion-lcp.page.html',
  styleUrls: ['./configuracion-lcp.page.scss'],
})
export class ConfiguracionLcpPage implements OnInit {
  segmentValue = 'crear'; // valor por defecto

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }


}
