import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { CarruselLateralLpService } from 'src/app/services/lp/carrusel-lateral-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eliminar-imagen-lateral',
  templateUrl: './eliminar-imagen-lateral.page.html',
  styleUrls: ['./eliminar-imagen-lateral.page.scss'],
})
export class EliminarImagenLateralPage implements OnInit {
  public base_url = environment.base_url;
  public sliderImagesLateral: string[] = [];
  public uid: string;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private carruselLateralLpService: CarruselLateralLpService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.obtenercarruselLateral('lateral', this.usuarioService.uid);
    this.uid = this.usuarioService.usuario.uid;
  }

  obtenercarruselLateral(tipo: string, id: string): void {
    this.carruselLateralLpService.obtenercarruselLateral(tipo, id).subscribe(
      (resp: any) => {
        // console.log(resp)

        if (resp.ok) {
          // Verificar si hay imágenes disponibles
          if (resp.rutasImagenes && resp.rutasImagenes.length > 0) {
            // Construir las URL completas para las imágenes
            this.sliderImagesLateral = resp.rutasImagenes.map(
              (rutaImagen: string) => {
                // Evitar doble slash en la URL
                const base = this.base_url.endsWith('/')
                  ? this.base_url.slice(0, -1)
                  : this.base_url;
                const ruta = rutaImagen.startsWith('/')
                  ? rutaImagen.slice(1)
                  : rutaImagen;
                const urlCompleta = `${base}/${ruta}`;
                console.log('URL completa:', urlCompleta);
                return urlCompleta;
              }
            );
          } else {
            this.sliderImagesLateral = [`${this.base_url}/imagenes/no-img.jpg`];
            console.log('No hay imágenes. Se muestra imagen por defecto.');
          }
        } else {
          console.error('Error en la respuesta:', resp.msg);
        }
      },
      (error) => {
        console.error('Error al obtener imágenes:', error);
      }
    );
  }



  obtenerNombreArchivoDesdeUrl(url: string): string {
    return url.split('/').pop()?.split('?')[0] || '';
  }

  async borrarImagen(tipo: string, uid: string, nombreArchivo: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que deseas eliminar esta imagen ${tipo}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Eliminando...',
            });
            await loading.present();

            this.carruselLateralLpService
              .borrarImagenLateral(tipo, uid, nombreArchivo)
              .subscribe({
                next: (resp) => {
                  if (resp.ok) {
                    // Eliminar visualmente la imagen
                    this.sliderImagesLateral = this.sliderImagesLateral.filter(
                      (img) => !img.includes(nombreArchivo)
                    );
                  } else {
                    console.error(
                      'Error al eliminar imagen del servidor:',
                      resp.msg
                    );
                  }
                  loading.dismiss();
                },
                error: (err) => {
                  console.error('Error en la petición de borrado:', err);
                  loading.dismiss();
                },
              });
          },
        },
      ],
    });

    await alert.present();
  }

  cancelarEliminar() {
    this.navCtrl.back(); // O puedes hacer otra acción, como cerrar modal
  }
   volver() {
    this.navCtrl.back();
  }
}
