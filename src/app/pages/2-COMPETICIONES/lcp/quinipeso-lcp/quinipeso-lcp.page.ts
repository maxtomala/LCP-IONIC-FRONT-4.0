import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quinipeso-lcp',
  templateUrl: './quinipeso-lcp.page.html',
  styleUrls: ['./quinipeso-lcp.page.scss'],
})
export class QuinipesoLcpPage implements OnInit {
  segmentValue = 'apuestas'; // valor por defecto

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
