import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LigaCorporalProfesional } from '../../models/lcp/liga-corporal-profesional.model';
import { UsuarioService } from '../usuario.service';
import { CalendarioLcp, EmparejamientoLcp } from '../../models/emparejamiento-lcp.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EmparejarCalendarioLcpService {

  public id: string
  public ligacorporaporfesional: LigaCorporalProfesional;


    get token(): string {
      return localStorage.getItem('token') || '';
    }

    get headers(): any {
      return {
        'x-token': this.token,
      };
    }

    get uid() {
      return localStorage.getItem('usuarioId'); // Asegúrate de que el ID se almacena cuando el usuario se autentica

    }


  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
  ) {

  }


  // obtenerCalendario(_id: string): Observable<any> {
  //   // Construir la URL completa para la solicitud
  //   const url = `${base_url}/iniciarLcp/calendario/${_id}`;
  //   console.log('URL construida para la solicitud:', url); // Mostrar la URL que será utilizada para la solicitud

  //   return this.http.get(url, { headers: this.headers })
  //     .pipe(
  //       map((response: any) => {
  //         console.log('Respuesta recibida del servidor:', response); // Mostrar la respuesta del servidor
  //         return response.calendario; // Suponiendo que el calendario está en un campo llamado "calendario" en la respuesta
  //       })
  //     );
  // }

  obtenerCalendario(_id: string): Observable<CalendarioLcp> {
    const url = `${ base_url}/iniciarLcp/calendario/${_id}`;
    console.log('URL construida para la solicitud:', url); // Mostrar la URL que será utilizada para la solicitud

    return this.http.get<CalendarioLcp>(url, { headers: this.headers })
      .pipe(
        map((response: any) => {
          console.log('Respuesta recibida del servidor:', response); // Mostrar la respuesta del servidor

          if (response && response.calendario) {
            console.log('Calendario encontrado en la respuesta:', response.calendario);
            return response.calendario;
          } else {
            console.warn('No se encontró el calendario en la respuesta del servidor');
            return null;
          }
        })
      );
  }

  // posiblemente para habilitar el boton
  calcularJornadaActual(fechaInicio: Date, fechaActual: Date): number {
    const diaInicio = fechaInicio.getDay();
    let primerMiercoles = new Date(fechaInicio);

    // Ajustar la fecha al primer miércoles
    if (diaInicio !== 3) {
      primerMiercoles.setDate(primerMiercoles.getDate() + ((3 - diaInicio + 7) % 7));
    }

    // Calcular la diferencia en días y luego en semanas
    const diffTime = Math.abs(fechaActual.getTime() - primerMiercoles.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const jornada = Math.floor(diffDays / 7) + 1;

    return jornada;
  }




  iniciarLCP(ligaId: string, usuarioId: string): Observable<any> {
    const url = `${base_url}/iniciarLcp/emparejamiento/${ligaId}`;
    console.log('URL construida para la solicitud:', url);

    const body = { usuarioId }; // El cuerpo de la solicitud con el ID del usuario

    return this.http.post<any>(url, body, { headers: this.headers })
      .pipe(
        map((response: any) => {
          console.log('Respuesta recibida del servidor:', response);

          if (response && response.calendario) {
            console.log('Calendario encontrado en la respuesta:', response.calendario);
            return response.calendario;
          } else {
            console.warn('No se encontró el calendario en la respuesta del servidor');
            return null;
          }
        })
      );
  }


  tablaClasificatoriaLcp(ligaId: string): Observable<any> {
    const url = `${base_url}/tablaclasificatorialcp/${ligaId}`;
    console.log('URL construida para la solicitud:', url);

    return this.http.get<any>(url,  { headers: this.headers })
    .pipe(
      map((response: any) => {
        console.log('Respuesta recibida del servidor:', response);
        return response.tablaClasificatoria; // Ajusta esto según la estructura de tu respuesta
      }),
      catchError((error) => {
        console.error('Error al obtener la tabla clasificatoria:', error);
        throw error;
      })
    );
  }


  actualizarTablaClasificatoria(_id: string): Observable<any> {
    const url = `${base_url}/tablaclasificatorialcp/actualizarTablaClasificatoria/${_id}`;
    console.log('URL construida para la solicitud:', url);

    return this.http.put<any>(url, { headers: this.headers })
      .pipe(
        map(response => {
          console.log('Respuesta recibida del servidor:', response);
          if (response && response.calendario) {
            console.log('Calendario encontrado en la respuesta:', response.calendario);
            return response.calendario as CalendarioLcp;
          } else {
            console.warn('No se encontró el calendario en la respuesta del servidor');
            return null;
          }
        }),
        catchError(error => {
          console.error('Error en la solicitud:', error);
          return throwError(() => new Error('Error al actualizar la tabla clasificatoria: ' + error.message));
        })
      );
  }







}
