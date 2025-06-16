// src/app/pipes/imagen-local.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Pipe({
  name: 'imagenPodio'
})
export class ImagenPodioLcPipe implements PipeTransform {

transform(img: string, tipo: string = 'usuarios'): string {
  console.log('Imagen recibida:', img, 'Tipo:', tipo);

  if (!img) {
    return `${base_url}/img-perfil-usuario/obtener/${tipo}/no-img`;
  }

  if (img.includes('http')) {
    return img;
  }

  if (tipo === 'lc/podio-lc') {
    return `${base_url}/uploads/lc/podio-lc/${img}`;
  }

  return `${base_url}/img-perfil-usuario/obtener/${tipo}/${img}`;
}

}
