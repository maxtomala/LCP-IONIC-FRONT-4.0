import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ImgPerfilUsuarioService {


  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): any {
    return {
      'x-token': this.token,
    };
  }
  constructor(private http: HttpClient) {}


actualizarImagen(imagen: File, usuarioId: string) {
    const formData = new FormData();
    formData.append('imagen', imagen);

    const url = `${base_url}/img-perfil-usuario/actualizar/usuarios/${usuarioId}`;
    return this.http.put(url, formData);
  }


  obtenerUrlImagen(nombreArchivo: string) {
    return `${base_url}/img-perfil-usuario/obtener/usuarios/${nombreArchivo}`;
  }


actualizarImagenPortada(archivo: File, uid: string) {
    const formData = new FormData();
    formData.append('imagen', archivo);

    const url = `${base_url}/imgPortada-perfil-usuario/actualizar/usuarios/${uid}`;
    return this.http.put(url, formData);
  }


}
