import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imgVerificadorLcp'
})
export class Imagen3Pipe implements PipeTransform {
  transform(imgVerificadorLcp: string, tipo: 'usuarios'): string {
    let imgUrl: string;

    if (!imgVerificadorLcp) {
      imgUrl = `${base_url}/verificador-lcp/obtener/${tipo}/no-img`;
      console.log('No image verifier provided, using default URL:', imgUrl);
    } else {
      imgUrl = `${base_url}/verificador-lcp/obtener/${tipo}/${imgVerificadorLcp}`;
      console.log('Image verifier provided, using URL:', imgUrl);
    }

    return imgUrl;
  }
}
