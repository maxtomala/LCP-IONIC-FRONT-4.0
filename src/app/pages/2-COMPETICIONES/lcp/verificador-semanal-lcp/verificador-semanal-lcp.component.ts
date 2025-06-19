import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalImgVerificadorLcService } from 'src/app/services/lc/modal-img-verificador-lc.service';
import { ModalImgVerificadorLcpService } from 'src/app/services/lcp/modal-img-verificador-lcp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-verificador-semanal-lcp',
  templateUrl: './verificador-semanal-lcp.component.html',
  styleUrls: ['./verificador-semanal-lcp.component.scss'],
})
export class VerificadorSemanalLcpComponent  implements OnInit {

  @Input() liga: LigaCorporalProfesional | null = null;

  public usuario: Usuario;
  imagenSubida: File | null = null;
  imgPreview: string | ArrayBuffer | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private modalImgVerificadorLcpService: ModalImgVerificadorLcpService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {}

  // Carga la imagen en una vista previa
  cambiarImg(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.imagenSubida = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imgPreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // Sube la imagen al backend
  subirImagen() {
    // if (!this.imagenSubida || !this.liga?.usuario?._id) return;
    const { uid } = this.usuarioService.usuario;


    this.modalImgVerificadorLcpService.actualizarImagenVerificadorLcp(this.imagenSubida, 'usuarios', uid)
      .subscribe({
        next: async (resp: any) => {
          this.imgPreview = null;
          this.imagenSubida = null;
          await this.presentToast('Imagen actualizada correctamente ✅');
        },
        error: async () => {
          await this.presentToast('Error al subir la imagen ❌');
        }
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
  cancelarImagen() {
  this.imgPreview = null;
  this.imagenSubida = null;
}

}
