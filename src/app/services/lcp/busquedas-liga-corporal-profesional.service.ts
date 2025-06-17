import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CargarUsuario } from 'src/app/interfaces/cargar-usuarios.interface';
import { Usuario } from 'src/app/models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasLigaCorporalProfesionalService {



  constructor( private http: HttpClient

  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  private transformarUsuarios(resultados: any[]) {
    return resultados.map(user => ({
      nombre: user.nombre,
      email: user.email,
      img: user.img,
      imgUrl: user.img, // Aquí asignamos la imagen a la propiedad imgUrl
      google: user.google,
      role: user.role,
      uid: user.uid,
      genero: user.genero,
      pais: user.pais,
      fechaNacimiento: user.fechaNacimiento,
      altura: user.altura,
      instagram: user.instagram,
      objetivo: user.objetivo,
      pesoIdeal: user.pesoIdeal,
      fraseCelebre: user.fraseCelebre
    }));
  }



  // cargarUsuarios( desde: number = 0 ) {

  //   const url = `${ base_url }/usuarios?desde=${ desde }`;
  //   return this.http.get<CargarUsuario>( url, this.headers )
  //           .pipe(
  //             map( resp => {
  //               const usuarios = resp.usuarios.map(
  //                 user => new Usuario(user.nombre, user.email, '', user.img, user.google as any, user.role, user.uid as any, user.imgVerificadorLc as any,user.imgVerificadorLp, user.pais as any,user.fechaNacimiento as any, user.fraseCelebre)
  //               );
  //               return {
  //                 total: resp.total,
  //                 usuarios
  //               };
  //             })
  //           )
  // }

    // para la busquedas liga corporal profesional:la colecion de participantes
    buscar2(tipo: 'liga-corporal-profesional', termino: string, _id: string) {
      const url = `${base_url}/todolcp/${_id}/coleccion/${tipo}/${termino}`;
      return this.http.get<any[]>(url, this.headers)
        .pipe(
          map((resp: any) => {
            console.log('Respuesta:', resp);

            switch (tipo) {
              case 'liga-corporal-profesional':
                console.log('Resultados:', resp.resultados);
                return this.transformarUsuarios(resp.resultados);  //  extraer resp.resultados

              default:
                return [];
            }
          })
        );
    }





    buscarLcp(filters: any) {
      const url = `${base_url}/ligas-todolcp`;
      console.log('Request URL:', url); // Log para la URL
      return this.http.post<any[]>(url, filters, this.headers)
        .pipe(
          map((resp: any) => resp),
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
      console.error('Error en la petición:', error);
      return throwError(() => new Error('Error en la búsqueda, por favor intenta de nuevo más tarde.'));
    }





}

