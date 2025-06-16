import { Component, OnInit } from '@angular/core';
import { CarruselLateralLpService } from 'src/app/services/lp/carrusel-lateral-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrusel-lateral-lp',
  templateUrl: './carrusel-lateral-lp.component.html',
  styleUrls: ['./carrusel-lateral-lp.component.scss'],
})
export class CarruselLateralLpComponent implements OnInit {
  public base_url = environment.base_url;
  public sliderImagesLateral: string[] = [];

  constructor(
    private carruselLateralLpService: CarruselLateralLpService,
    private usuarioService: UsuarioService
  ) {}
  ngOnInit() {
    this.obtenercarruselLateral('lateral', this.usuarioService.uid);
  }

  obtenercarruselLateral(tipo: string, id: string): any {
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
            // No hay imágenes, puedes asignar la imagen por defecto o manejarlo según tu lógica
            this.sliderImagesLateral = [`${this.base_url}/imagenes/no-img.jpg`];
            console.log('URL completa:', this.sliderImagesLateral); // Agregar el console.log aquí
          }
        } else {
          console.error('Error en la respuesta del servicio:', resp.msg);
        }
      },
      (error) => {
        console.error('Error al obtener imágenes del servicio:', error);
      }
    );
  }

  triggerFileInput() {
    const fileInput = document.getElementById(
      'fileInputLateral'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const tipo = 'lateral';
      const id = this.usuarioService.uid;
      this.carruselLateralLpService
        .subirImagenLateral(tipo, id, file)
        .subscribe({
          next: (resp) => {
            console.log('Imagen subida con éxito', resp);
            // Aquí puedes actualizar el carrusel para mostrar la imagen subida
            this.obtenercarruselLateral(tipo, id); // refrescar imágenes
          },
          error: (err) => {
            console.error('Error al subir imagen:', err);
          },
        });
    }
  }
}
