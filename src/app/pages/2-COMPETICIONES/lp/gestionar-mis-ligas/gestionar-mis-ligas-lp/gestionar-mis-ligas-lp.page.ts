import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-gestionar-mis-ligas-lp',
  templateUrl: './gestionar-mis-ligas-lp.page.html',
  styleUrls: ['./gestionar-mis-ligas-lp.page.scss'],
})
export class GestionarMisLigasLpPage implements OnInit {

    public usuario: Usuario;
 public uid: string
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private registroPesoLpService: RegistroPesoLpService,
    private usuarioService: UsuarioService,

  ) {}

  ngOnInit() {

      this.usuario = this.usuarioService.usuario;

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

descargarPDF(): void {
  this.uid = this.usuarioService.usuario.uid; // Asegúrate de que esto te devuelve el ID correcto
  this.registroPesoLpService.descargarHistorialPesoPDF(this.uid);
}

  volver() {
    this.navCtrl.back();
  }

  segmentValue = 'mis-registros'; // valor por defecto

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
