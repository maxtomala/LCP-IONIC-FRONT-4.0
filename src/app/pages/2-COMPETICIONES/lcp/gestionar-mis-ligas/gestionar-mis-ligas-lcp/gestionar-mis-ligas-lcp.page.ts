import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-gestionar-mis-ligas-lcp',
  templateUrl: './gestionar-mis-ligas-lcp.page.html',
  styleUrls: ['./gestionar-mis-ligas-lcp.page.scss'],
})
export class GestionarMisLigasLcpPage implements OnInit {
segmentValue = 'crear'; // valor por defecto

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
        // para viajar a una ruta hija desde otra web por una seccion en particular
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
