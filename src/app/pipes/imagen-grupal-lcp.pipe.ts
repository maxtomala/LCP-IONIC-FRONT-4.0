import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagenGrupalLcp'
})
export class ImagenGrupalLcpPipe implements PipeTransform {

  transform(imgGrupalLcp: string , idLiga: string): string {
    if (!imgGrupalLcp || imgGrupalLcp === 'no-img.jpg') {
      return `${base_url}/uploads/lcp/img-por-defecto/no-img.jpg`;
    }

    return `${base_url}/imgGrupalLcp/img-grupal-lcp/${idLiga}/${imgGrupalLcp}`;
  }
}
