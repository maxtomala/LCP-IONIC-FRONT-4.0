import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagen2'
})
export class Imagen2Pipe implements PipeTransform {
  transform(imgVerificadorLc: string, tipo: 'usuarios'): string {


    // Devuelve la URL combinada para las imágenes de usuarios
    let imgUrl: string;
    console.log('Transforming image URL');
    console.log('Image Verifier:', imgVerificadorLc);
    console.log('Type:', tipo);

    if (!imgVerificadorLc) {
      imgUrl = `${base_url}/verificador-lc/verificador-lc/${tipo}/no-img`;
    } else {
      imgUrl = `${base_url}/verificador-lc/verificador-lc/${tipo}/${imgVerificadorLc}`;
    }

    return imgUrl;
  }
}
