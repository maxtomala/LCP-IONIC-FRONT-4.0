import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { RegistroPesoLcp } from 'src/app/models/lcp/registro-peso-lcp.model';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RegistroPesoLcpService {

  constructor(private http: HttpClient) {}

  public ligaCorporalProfesional: LigaCorporalProfesional;
  public registroPesoLcp:RegistroPesoLcp;

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): any {
    return {
      'x-token': this.token,
    };
  }


  registrarPesoInicial(idLiga: string, idParticipante: string,peso: number, fecha: Date): Observable<any> {
    const url = `${base_url}/registropesolcp/registrarPesoInicial/${idLiga}/${idParticipante}`;
    const datoDePeso = {  peso: peso, fecha: fecha};
    // console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", datoDePeso);
    return this.http.post(url, datoDePeso,  { headers: this.headers });
  }


  obtenerRegistrarPesosIniciales(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/obtenerRegistrarPesosIniciales/${idLiga}`;
    // console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", RegistroPesoLcp);

    return this.http.get<any>(url, this.headers);
  }

  registrarPesoJornada (idLiga: string, idParticipante: string,peso: number, fecha: Date, jornada:number): Observable<any> {
    const url = `${base_url}/registropesolcp/registrarPesoJornada/${idLiga}/${idParticipante}`;
    const datoDePeso = {  peso: peso, fecha: fecha, jornada:jornada};
    // console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", datoDePeso);
    return this.http.post(url, datoDePeso,  { headers: this.headers });
  }

  obtenerPesosTodasLasJornadas(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/${idLiga}`;
    // console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", RegistroPesoLcp);

    return this.http.get<any>(url, this.headers);
  }

  obtenerPesosPorLigaBotonBloqueo(idLiga: string): Observable<any> {
    const url = `${base_url}/registropesolcp/boton/${idLiga}`;
    console.log("Datos de peso a enviar:", url);

    console.log("Datos de peso a enviar:", RegistroPesoLcp);

    return this.http.get(url, this.headers);
  }



}
