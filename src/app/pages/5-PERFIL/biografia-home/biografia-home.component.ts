import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ImgPerfilUsuarioService } from 'src/app/services/img-perfil-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-biografia-home',
  templateUrl: './biografia-home.component.html',
  styleUrls: ['./biografia-home.component.scss'],
})
export class BiografiaHomeComponent implements OnInit {
  public usuario: Usuario;

  public perfilPaso1: FormGroup;
  public biografia: string = '';


  constructor(
    private usuarioService: UsuarioService,
    private imgPerfilUsuarioService: ImgPerfilUsuarioService,
    private toastController: ToastController,
    private fb: FormBuilder

  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
        // Mostrar biografía actual si existe
         this.perfilPaso1 = this.fb.group({
      biografia: [
        this.usuario.biografia || '',  // poner la biografía existente como valor inicial
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(280),
        ],
      ],
    });
  }


guardarTodo() {
  this.subirImagen();
  this.subirImagen2();
  this.guardarCambios();
}



 guardarCambios() {
    if (this.perfilPaso1.invalid) {
      this.perfilPaso1.markAllAsTouched();
      console.warn('Formulario inválido');
      return;
    }

    const biografia = this.perfilPaso1.value.biografia;
    const { uid, role, nombre, email } = this.usuarioService.usuario;

    if (!uid) {
      console.error('UID de usuario no disponible');
      return;
    }

    const data = {
      role,
      nombre,
      email,
      biografia,
    };

    console.log('Role:', role);

    this.usuarioService.actualizarUsuario(uid, data).subscribe({
      next: (resp) => {
        console.log('Biografía actualizada con éxito', resp);
        this.usuarioService.usuario.biografia = biografia;
        this.usuario = this.usuarioService.usuario;  // Actualiza localmente el usuario
        this.mostrarToast('Biografía actualizada correctamente');
      },
      error: (err) => {
        console.error('Error al actualizar la biografía', err);
        this.mostrarToast('Error al actualizar la biografía');
      },
    });
  }























// avatar
public imagenSubir: File;
public imagenTemp: any = null;
// portada
public imagenSubir2: File;
public imagenTemp2: any = null;


subirImagen() {
  if (!this.imagenSubir || !this.usuario?.uid) return;

  this.imgPerfilUsuarioService.actualizarImagen(this.imagenSubir, this.usuario.uid)
    .subscribe({
      next: (resp: any) => {
        this.usuario.img = resp.nombreArchivo;
      },
      error: () => {
      }
    });
}
cambiarImagen(event: any) {
  const file = event.target.files[0];
  if (!file) {
    this.imagenSubir = null;
    return;
  }

  this.imagenSubir = file;

  // Mostrar preview temporal
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    this.imagenTemp = reader.result;
  };

}



subirImagen2() {
  if (!this.imagenSubir2 || !this.usuario?.uid) return;

  this.imgPerfilUsuarioService.actualizarImagenPortada(this.imagenSubir2, this.usuario.uid)
    .subscribe({
      next: (resp: any) => {
        this.usuario.imgPortada = resp.nombreArchivo;
      },
      error: () => {
      }
    });
}
cambiarImagenPortada(event: any) {
 const file = event.target.files[0];
  if (!file) {
    this.imagenSubir2 = null;
    return;
  }

  this.imagenSubir2 = file;

  // Mostrar preview temporal
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    this.imagenTemp2 = reader.result;
  };

}






// alert de guadado correctamente
async mostrarToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000,       // en milisegundos (2 segundos)
    position: 'bottom',   // top, middle, bottom
    cssClass: 'toast-custom-success' //  Clase personalizada
  });

  await toast.present();
}


}
