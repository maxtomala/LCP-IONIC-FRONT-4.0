import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracion-lc',
  templateUrl: './configuracion-lc.page.html',
  styleUrls: ['./configuracion-lc.page.scss'],
})
export class ConfiguracionLcPage implements OnInit {
  segmentValue = 'crear'; // valor por defecto

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    // para viajar a una ruta hija desde otra web para una seccion especifica
    this.route.queryParams.subscribe((params) => {
      const seccion = params['seccion'];
      if (
        seccion === 'editar' ||
        seccion === 'eliminar' ||
        seccion === 'crear'
      ) {
        this.segmentValue = seccion;
      }
    });
  }

  volver() {
    this.navCtrl.back();
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
