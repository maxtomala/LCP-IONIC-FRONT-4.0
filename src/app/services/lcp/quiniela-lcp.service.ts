import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';

import { Usuario } from '../models/usuario.model';
import { Observable, of, throwError } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class QuinielaLcpService {


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


//  funciona*
obtenerPlantillaQuinielas(ligaId: string, jornada: number, page: number, limit: number): Observable<any> {
    const url = `${base_url}/quiniela-lcp2/obtenerPlantillaQuinielas/${ligaId}/${jornada}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    console.log('URL para obtenerPlantillaQuinielas:', url);
    console.log('Parámetros:', params.toString());

    return this.http.get<any>(url, { params }).pipe(
      tap(data => {
        console.log('Respuesta recibida del servidor:', data);
      }),
      catchError(error => {
        console.error('Error al realizar la solicitud para obtener plantillas de quinielas:', error);
        return throwError(error);
      })
    );
  }


//  funciona*
guardarResultados(ligaId: string, usuarioId: string, jornada: number, quinielas: any[]): Observable<any> {
  const url = `${base_url}/quiniela-lcp2/guardar-resultados/${ligaId}/${usuarioId}/${jornada}`;
  console.log('URL para guardar resultados:', url);
  console.log('Datos enviados:', { quinielas });

  return this.http.post<any>(url, { quinielas }).pipe(
    tap(data => {
      console.log('Respuesta recibida del servidor:', data);
    }),
    catchError(error => {
      console.error('Error al guardar los resultados:', error);
      return throwError(error);
    })
  );
}

//  funciona*
reclamarQuinielasPorCreditos(ligaId: string, usuarioId: string, jornada: number): Observable<any> {
  const url = `${base_url}/creditos-lcp/reclamarCreditos/${ligaId}/${usuarioId}/${jornada}`;
  return this.http.post<any>(url, {});
}
//  funciona*

obtenerCreditosPorUsuario(usuarioId: string, ligaId: string): Observable<any> {
  const url = `${base_url}/creditos-lcp/obtenerCreditos/${ligaId}/${usuarioId}`;
  return this.http.get<any>(url).pipe(
    tap(data => {
      console.log('Créditos obtenidos del servidor:', data);
    }),
    catchError(error => {
      console.error('Error al obtener créditos:', error);
      throw error;
    })
  );
}


//  comprobar
restarPuntosConCredito(usuarioId: string, adversarioId: string, ligaId: string): Observable<any> {
  const url = `${base_url}/creditos-lcp/restar-puntos/${ligaId}/${usuarioId}/${adversarioId}/`;
  return this.http.post<any>(url, {}).pipe(
    tap(data => {
      console.log('Respuesta recibida del servidor para restar puntos:', data);
    }),
    catchError(error => {
      console.error('Error al realizar la solicitud para restar puntos:', error);
      return throwError(error);
    })
  );
}











// pagina de Quiniela ganadores
obtenerGanadoresQuiniela(ligaId: string): Observable<any> {
  return this.http.get<any>(`${base_url}/quiniela-lcp/ganadores/${ligaId}`).pipe(
    tap(response => {
      console.log('Respuesta de obtenerGanadoresQuiniela:', response);
    })
  );
}

obtenerResultadosQuinielaPorUsuario(ligaId: string, usuarioId: string, jornada: number, page: number , limit: number): Observable<any> {
  const url = `${base_url}/quiniela-lcp2/obtener-todos-resultados/${ligaId}/${usuarioId}/${jornada}`;
  let params = new HttpParams()
  .set('page', page.toString())
  .set('limit', limit.toString());

  return this.http.get<any>(url, { params }).pipe(
    tap(data => {
      console.log('Respuesta recibida del servidor:', data);
    }),
    catchError(error => {
      console.error('Error al realizar la solicitud para obtener quiniela:', error);
      return throwError(error);
    })
  );
}

  // obtenerGanadoresYPenalizadosPorJornada(id: string): Observable<any> {
  //   const url = `${base_url}/quiniela-lcp/${id}`;
  //   console.log('URL para obtenerGanadoresYPenalizadosPorJornada:', url);
  //   return this.http.get<any>(url).pipe(
  //     tap(data => {
  //       console.log('Respuesta recibida del servidor:', data);
  //     }),
  //     catchError(error => {
  //       console.error('Error al realizar la solicitud HTTP:', error);
  //       return throwError(error);
  //     })
  //   );
  // }









}


