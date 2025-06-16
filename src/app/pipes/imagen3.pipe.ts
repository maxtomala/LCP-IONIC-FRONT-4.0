import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagen3'
})
export class Imagen3Pipe implements PipeTransform {
  transform(imgVerificadorLcp: string, tipo: 'usuarios'): string {
    // Devuelve la URL combinada para las imágenes de usuarios
    let imgUrl: string;

    console.log('Transforming image URL');
    console.log('Image Verifier:', imgVerificadorLcp);
    console.log('Type:', tipo);

    if (!imgVerificadorLcp) {
      imgUrl = `${base_url}/verificador-lcp/verificador-lcp/${tipo}/no-img`;
      console.log('No image verifier provided, using default URL:', imgUrl);
    } else {
      imgUrl = `${base_url}/verificador-lcp/verificador-lcp/${tipo}/${imgVerificadorLcp}`;
      console.log('Image verifier provided, using URL:', imgUrl);
    }

    return imgUrl;
  }
}
