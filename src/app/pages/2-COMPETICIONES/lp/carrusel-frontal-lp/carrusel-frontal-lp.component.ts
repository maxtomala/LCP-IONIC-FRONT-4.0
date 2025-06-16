import { Component, OnInit } from '@angular/core';
import { CarruselFrontalLpService } from 'src/app/services/lp/carrusel-frontal-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrusel-frontal-lp',
  templateUrl: './carrusel-frontal-lp.component.html',
  styleUrls: ['./carrusel-frontal-lp.component.scss'],
})
export class CarruselFrontalLpComponent  implements OnInit {

public base_url = environment.base_url;
  public sliderImagesFrontal: string[] = [];

  constructor(
    private carruselFrontalLpService: CarruselFrontalLpService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.obtenercarruselFrontal('frontal', this.usuarioService.uid);
  }

  obtenercarruselFrontal(tipo: string, id: string): void {
    this.carruselFrontalLpService.obtenercarruselfrontal(tipo, id)
    .subscribe(
          (resp: any) => {
            // console.log(resp)

              if (resp.ok) {
                  // Verificar si hay imágenes disponibles
                  if (resp.rutasImagenes && resp.rutasImagenes.length > 0) {
                      // Construir las URL completas para las imágenes
                      this.sliderImagesFrontal = resp.rutasImagenes.map((rutaImagen: string) => {
 // Evitar doble slash en la URL
              const base = this.base_url.endsWith('/') ? this.base_url.slice(0, -1) : this.base_url;
              const ruta = rutaImagen.startsWith('/') ? rutaImagen.slice(1) : rutaImagen;
              const urlCompleta = `${base}/${ruta}`;
              console.log('URL completa:', urlCompleta);
              return urlCompleta;
                      });

            } else {
              this.sliderImagesFrontal = [`${this.base_url}/imagenes/no-img.jpg`];
              console.log('No hay imágenes. Se muestra imagen por defecto.');
            }
          } else {
            console.error('Error en la respuesta:', resp.msg);
          }
        },
        error => {
          console.error('Error al obtener imágenes:', error);
        }
      );
  }

  // Método para abrir el selector de archivo oculto
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInputFrontal') as HTMLInputElement;
    if (fileInput) fileInput.click();
  }

  // Evento cuando se selecciona un archivo
  onFileSelected(event: any): void {
    const archivo: File = event.target.files[0];
    if (archivo) {
      console.log('Archivo seleccionado:', archivo.name);
      // Aquí podrías llamar a un método para subir la imagen, p.ej.:
      // this.subirImagenFrontal('frontal', this.usuarioService.uid, archivo);
    }
  }
}


