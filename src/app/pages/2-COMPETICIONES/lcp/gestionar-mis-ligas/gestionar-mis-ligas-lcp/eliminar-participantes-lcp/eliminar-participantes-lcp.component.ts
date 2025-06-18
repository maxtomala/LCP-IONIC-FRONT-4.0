import { Component, OnInit } from '@angular/core';
import {  ToastController } from '@ionic/angular';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { LigaCorporalProfesionalService } from 'src/app/services/lcp/liga-corporal-profesional.service';

import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-eliminar-participantes-lcp',
  templateUrl: './eliminar-participantes-lcp.component.html',
  styleUrls: ['./eliminar-participantes-lcp.component.scss'],
})
export class EliminarParticipantesLcpComponent  implements OnInit {
  public ligaCorporalProfesional: LigaCorporalProfesional[] = []; // ✅ Aquí va la lista que usas con *ngFor

  constructor(
    private usuarioService: UsuarioService,
    private ligaCorporalProfesionalService: LigaCorporalProfesionalService,
    private toastController: ToastController,
  ) {}

  public cargando = false;
  public errorMensaje = '';
  public exitoMensaje = '';

  ngOnInit() {
    this.obtenerTodasLasLigasPorIdUsuario();
  }

  obtenerTodasLasLigasPorIdUsuario(): void {
    const { uid } = this.usuarioService.usuario;

    this.cargando = true;
    this.errorMensaje = '';
    this.exitoMensaje = '';

    this.ligaCorporalProfesionalService
      .obtenerTodasLasLigasPorIdUsuario(uid)
      .subscribe({
        next: (ligas) => {
          this.ligaCorporalProfesional = ligas;
          this.cargando = false;

          if (ligas.length === 0) {
            this.errorMensaje = 'No se encontraron ligas.';
          } else {
            this.exitoMensaje = `Se cargaron ${ligas.length} ligas correctamente.`;
          }
        },
        error: (err) => {
          this.errorMensaje = 'Error al cargar ligas. Intente de nuevo.';
          this.cargando = false;
        },
      });
  }

async eliminarParticipanteDeLiga(liga: any, participante: any) {
  this.ligaCorporalProfesionalService.eliminarParticipanteProfesional(liga._id, participante.uid)
    .subscribe({
      next: async (res: any) => {
        this.obtenerTodasLasLigasPorIdUsuario();

        const toast = await this.toastController.create({
          message: res.mensaje ,
          duration: 2000,
          color: 'success',
          position: 'bottom',
          cssClass: 'toast-mensaje-centro'
        });
        await toast.present();
      },
      error: async (err) => {

        const toast = await this.toastController.create({
          message: 'Error eliminando participante. Intente de nuevo.',
          duration: 2000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();
      }
    });
}



}
