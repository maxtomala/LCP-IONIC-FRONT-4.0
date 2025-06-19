import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { RegistroPesoLcp } from 'src/app/models/lcp/registro-peso-lcp.model';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class RegistroPesoLcpService {
  constructor(private http: HttpClient) {}

  public ligaCorporalProfesional: LigaCorporalProfesional;
  public registroPesoLcp: RegistroPesoLcp;

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): any {
    return {
      'x-token': this.token,
    };
  }

  // funciona
  registrarPesoInicial(
    idLiga: string,
    idParticipante: string,
    peso: number,
    unidad: 'kg' | 'lb',
    fecha?: Date,
    anio?: number
  ): Observable<any> {
    const url = `${base_url}/registropesolcp/registrarPesoSecundario/${idLiga}/${idParticipante}`;

    const datoDePeso = {
      peso,
      unidad,
      fecha,
      anio,
    };

    console.log('Datos de peso a enviar:', datoDePeso);

    return this.http.post(url, datoDePeso, { headers: this.headers });
  }
  // funciona

  obtenerRegistrarPesosIniciales(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/obtenerRegistrarPesosIniciales/${idLiga}`;

    console.log('Solicitando registros de peso inicial para liga:', idLiga);

    return this.http.get<any>(url, { headers: this.headers });
  }

  registrarPesoSecundario(
    lcpId: string,
    participanteId: string,
    data: {
      peso: number;
      unidad: string;
      jornada: number;
      fechaCreacion?: Date;
    }
  ) {
    return this.http.post<any>(
      `${base_url}/registropesolcp/registrarPesoSecundario/${lcpId}/${participanteId}`,
      data
    );
  }

  registrarPesoJornada(
    idLiga: string,
    idParticipante: string,
    peso: number,
    fecha: Date,
    jornada: number
  ): Observable<any> {
    const url = `${base_url}/registropesolcp/registrarPesoJornada/${idLiga}/${idParticipante}`;
    const datoDePeso = { peso: peso, fecha: fecha, jornada: jornada };
    // console.log("Datos de peso a enviar:", url);

    console.log('Datos de peso a enviar:', datoDePeso);
    return this.http.post(url, datoDePeso, { headers: this.headers });
  }

  obtenerPesosTodasLasJornadas(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/${idLiga}`;
    // console.log("Datos de peso a enviar:", url);

    console.log('Datos de peso a enviar:', RegistroPesoLcp);

    return this.http.get<any>(url, this.headers);
  }

  obtenerPesosPorLigaBotonBloqueo(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/boton/${idLiga}`;
    console.log('Datos de peso a enviar:', url);

    console.log('Datos de peso a enviar:', RegistroPesoLcp);

    return this.http.get(url, this.headers);
  }
}
