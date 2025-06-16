import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { delay, map, switchMap } from 'rxjs/operators';

import { Usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interface';
import { LigaCorporal,  } from '../models/liga-corporal.model';
import { RegistroPesoLc } from '../models/registro-peso-lc.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasLigaCorporalService {


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


  constructor( private http: HttpClient

  ) { }

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




  // para la busquedas liga corporal: la colecion de participantes

  buscar1(tipo: 'liga-corporal', termino: string, _id: string) {
    const url = `${base_url}/todolc/${_id}/coleccion/${tipo}/${termino}`;
    return this.http.get<any[]>(url, this.headers)
      .pipe(
        map((resp: any) => {
          console.log('Respuesta:', resp);

          switch (tipo) {
            case 'liga-corporal':
              console.log('Resultados:', resp.resultados);
              return this.transformarUsuarios(resp.resultados);

            default:
              return [];
          }
        })
      );
  }




}
