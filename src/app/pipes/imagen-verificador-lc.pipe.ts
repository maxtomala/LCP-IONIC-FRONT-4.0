import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imgVerificadorLc'
})
export class ImagenVerificadorLcPipe implements PipeTransform {

  transform(imgVerificadorLc: string, tipo: 'usuarios'): string {
    let imgUrl: string;

    console.log('Transforming image URL');
    console.log('Image Verifier:', imgVerificadorLc);
    console.log('Type:', tipo);

    if (!imgVerificadorLc) {
      imgUrl = `${base_url}/verificador-lc/obtener/${tipo}/no-img`;
      console.log('No image verifier provided, using default URL:', imgUrl);
    } else {
      imgUrl = `${base_url}/verificador-lc/obtener/${tipo}/${imgVerificadorLc}`;
      console.log('Image verifier provided, using URL:', imgUrl);
    }

    return imgUrl;
  }
}
