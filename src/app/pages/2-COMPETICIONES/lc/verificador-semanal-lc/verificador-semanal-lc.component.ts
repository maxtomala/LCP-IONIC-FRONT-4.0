import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalImgVerificadorLcService } from 'src/app/services/lc/modal-img-verificador-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-verificador-semanal-lc',
  templateUrl: './verificador-semanal-lc.component.html',
  styleUrls: ['./verificador-semanal-lc.component.scss'],
})
export class VerificadorSemanalLcComponent implements OnInit {

  @Input() liga: LigaCorporal | null = null;

  public usuario: Usuario;
  imagenSubida: File | null = null;
  imgPreview: string | ArrayBuffer | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private modalImgVerificadorLcService: ModalImgVerificadorLcService,
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



    this.modalImgVerificadorLcService.actualizarImagenVerificadorLc(this.imagenSubida, 'usuarios', uid)
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
