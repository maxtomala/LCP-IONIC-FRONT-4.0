// src/app/pipes/imagen-local.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Pipe({
  name: 'imagenPodio'
})

export class ImagenPodioLcPipe implements PipeTransform {

transform(img: string, tipo: string = 'usuarios'): string {
  if (!img) {
    // 👇 Imagen por defecto especial si es del podio ficticio
    if (tipo === 'lc/podio-lc') {
      return `${base_url}/uploads/lc/podio-lc/no-img2.jpg`;
    }

    // 👇 Imagen por defecto general
    return `${base_url}/img-perfil-usuario/obtener/${tipo}/no-img`;
  }

  // Imagen externa
  if (img.includes('http') || img.includes('https')) {
    return img;
  }

  // Detectar si es imagen ficticia para podio y la img de back que quieras
  //  lógica que verifica si el nombre del archivo de imagen comienza con ciertos prefijos específicos, en este caso 'lcp' o 'va'.
  //lo ideal es que en el back le pnga la img q empiece lcp-2 o lcp-imgPorDefecto.. apr q funcione tanto en el metodo obtenerPodioUltimas8Semanas como en el nombre en el arhivo de al carpeta
  const esFicticia = img.startsWith('lcp') || img.startsWith('va');
  if (tipo === 'lc/podio-lc' && esFicticia) {
    return `${base_url}/uploads/lc/podio-lc/${img}`;
  }



  // Imagen real del usuario
  return `${base_url}/img-perfil-usuario/obtener/usuarios/${img}`;
}

}
