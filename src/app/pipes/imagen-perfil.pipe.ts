import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagenPerfil'
})
export class ImagenPerfilPipe implements PipeTransform {

  transform( img: string, tipo: 'usuarios'): string {
    if ( !img ) {
      return `${ base_url }/img-perfil-usuario/obtener/${tipo}/no-img`;
  } else if ( img.includes('https') ) {
      return img;
  } else if ( img ) {
      return `${ base_url }/img-perfil-usuario/obtener/${ tipo }/${ img }`;
  } else {
      return `${ base_url }/img-perfil-usuario/obtener/${tipo}/no-img`;
  }




  }

}
