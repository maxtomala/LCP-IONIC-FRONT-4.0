import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imgPortada'
})
export class ImagenPortadaPipe implements PipeTransform {

  transform( imgPortada: string, tipo: 'usuarios'): string {
    let imgUrl: string;


    if (!imgPortada) {
      imgUrl = `${base_url}/imgPortada-perfil-usuario/obtener/${tipo}/no-img`;
    } else {
      imgUrl = `${base_url}/imgPortada-perfil-usuario/obtener/${tipo}/${imgPortada}`;
    }


    return imgUrl;
  }


}
