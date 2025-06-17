import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { RegistroPesoLc } from 'src/app/models/lc/registro-peso-lc.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class RegistroPesoLcService {

  constructor(private http: HttpClient) {}

  public ligacorporal: LigaCorporal;
  public registroPesoLc:RegistroPesoLc;

    get token(): string {
      return localStorage.getItem('token') || '';
    }

    get headers(): any {
      return {
        'x-token': this.token,
      };
    }



  guardarPesoParticipante(
    idLiga: string,
    idParticipante: string,
    peso: number,
    unidad: 'kg' | 'lb',
    fechaCreacion?: Date
  ): Observable<any> {
    const url = `${base_url}/registropesolc/${idLiga}/${idParticipante}`;

    const body: any = {
      peso,
      unidad,
    };

    // Si te envían fecha, la incluyes en el body
    if (fechaCreacion) {
      body.fechaCreacion = fechaCreacion;
    }

    return this.http.post(url, body);
  }

  // pesos para tabla clasificatoria
  obtenerPesosParticipante(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolc/${idLiga}`;
    // console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", RegistroPesoLc);

    return this.http.get(url, this.headers);
  }

  // Obtener todos los pesos de los participantes para la gráfica
  obtenerPesosParticipantesGrafica(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolc/pesos-grafica/${idLiga}`;
    return this.http.get(url, this.headers);
  }


  obtenerPesosPorLigaBotonBloqueo(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolc/boton/${idLiga}`;
    console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", RegistroPesoLc);

    return this.http.get(url, this.headers);
  }

}
