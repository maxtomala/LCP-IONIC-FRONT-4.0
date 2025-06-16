import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): any {
    return {
      'x-token': this.token,
    };
  }
  constructor(private http: HttpClient) {}



  // actualizar perfil
  async actualizarFoto(
    archivo: File,
    tipo: 'usuarios' ,
    id: string
    // id del documento
  ): Promise<any> {
    try {
      const url = `${base_url}/upload/${tipo}/${id}`;
      // formData es propio de javascript
      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();

      if (data.ok) {
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }

    } catch (error) {
      console.log(error);
    }

  }


  // actualizar imgVerificadorLc
  async actualizarImgVerificadorLc(
    archivo: File,
    tipo: 'usuarios',
    id: string
  ): Promise<any> {
    try {
      const url = `${base_url}/verificador-lc/verificador-lc/${tipo}/${id}`;
      // console.log('URL de la solicitud:', url);

      // Prepara el objeto FormData
      const formData = new FormData();
      formData.append('imagen', archivo);

      // Depura el contenido del FormData
      formData.forEach((value, key) => {
        if (value instanceof File) {
          console.log(`${key}: ${value.name}`);
        } else {
          console.log(`${key}: ${value}`);
        }
      });

      // Obtén el token desde localStorage
      const token = localStorage.getItem('token') || '';

      // Realiza la solicitud PUT
      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': token
        },
        body: formData
      });

      if (resp.ok) {
        const data = await resp.json();
        console.log('Respuesta del servidor:', data);

        // Verifica que `path` esté presente y no sea `undefined`
        if (data.path) {
          // Construye la URL completa
          const fullImagePath = `${data.path.replace('..', '')}`;
          return { ok: data.ok, path: fullImagePath }; // Devuelve la URL completa
        } else {
          console.error('La respuesta del servidor no contiene "path".');
          return false;
        }
      } else {
        console.error('Error en la respuesta del servidor:', resp.status, await resp.text());
        return false;
      }
    } catch (error) {
      console.error('Error en la subida de la imagen:', error);
      return false;
    }
  }



  // actualizar imgVerificadorLcp
  async actualizarImgVerificadorLcp(
    archivo: File,
    tipo: 'usuarios',
    id: string
  ): Promise<any> {
    try {
      const url = `${base_url}/verificador-lcp/verificador-lcp/${tipo}/${id}`;
      // console.log('URL de la solicitud:', url);

      // Prepara el objeto FormData
      const formData = new FormData();
      formData.append('imagen', archivo);

      // Depura el contenido del FormData
      formData.forEach((value, key) => {
        if (value instanceof File) {
          console.log(`${key}: ${value.name}`);
        } else {
          console.log(`${key}: ${value}`);
        }
      });

      // Obtén el token desde localStorage
      const token = localStorage.getItem('token') || '';

      // Realiza la solicitud PUT
      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': token
        },
        body: formData
      });

      if (resp.ok) {
        const data = await resp.json();
        console.log('Respuesta del servidor:', data);

        // Verifica que `path` esté presente y no sea `undefined`
        if (data.path) {
          // Construye la URL completa
          const fullImagePath = `${data.path.replace('..', '')}`;
          return { ok: data.ok, path: fullImagePath }; // Devuelve la URL completa
        } else {
          console.error('La respuesta del servidor no contiene "path".');
          return false;
        }
      } else {
        console.error('Error en la respuesta del servidor:', resp.status, await resp.text());
        return false;
      }
    } catch (error) {
      console.error('Error en la subida de la imagen:', error);
      return false;
    }
  }



}
