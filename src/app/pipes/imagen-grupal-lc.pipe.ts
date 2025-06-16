import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagenGrupalLc'
})
export class ImagenGrupalLcPipe implements PipeTransform {

  transform(imgGrupalLc: string , idLiga: string): string {
    if (!imgGrupalLc || imgGrupalLc === 'no-img.jpg') {
      return `${base_url}/uploads/lc/img-por-defecto/no-img.jpg`;
    }

    return `${base_url}/imgGrupalLc/img-grupal-lc/${idLiga}/${imgGrupalLc}`;
  }
}
