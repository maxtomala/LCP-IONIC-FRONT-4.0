// usuario-peso.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable,  tap,  } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class RegistroPesoLpService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): any {
    return {
      'x-token': this.token,
    };
  }

  // lp
  guardarPeso(
    id: string,
    peso: number,
    unidad: string,
    fechaCreacion?: Date
  ): Observable<any> {
    const url = `${base_url}/registropesolp/registrar-peso/${id}`;
    const body: any = {
      peso,
      unidad,
    };

    if (fechaCreacion) {
      body.fechaCreacion = fechaCreacion;
    }
    return this.http.post<any>(url, body, { headers: this.headers }).pipe(
      tap((respuesta: any) => {
        console.log('Respuesta del servidor al guardar peso:', respuesta);
      })
    );
  }
  // 1ºlp-tarjeta-socio y 2ºtarjeta perfil de salud y 3ºgrafica donut

  obtenerUltimoPeso(id: string): Observable<any> {
    const url = `${base_url}/registropesolp/ultimo-peso/${id}`;

    return this.http.get<any>(url, { headers: this.headers }).pipe(
      tap((respuesta: any) => {
        console.log('Último peso obtenido:', respuesta);
      })
    );
  }
// lp- graficas
  obtenertodosPesosUsuario(usuarioId: string): Observable<any> {
        const url = `${base_url}/registropesolp/todos-pesos/${usuarioId}`;

    return this.http.get<any>(url, { headers: this.headers }).pipe(
      tap((respuesta: any) => {
        console.log('Último peso obtenido:', respuesta);
      })
    );
  }
  // gestionar-mis-ligas editar y eliminar

  actualizarUltimoPeso(
    usuarioId: string,
    peso: number,
    unidad: 'kg' | 'lb'
  ): Observable<any> {
    const url = `${base_url}/registropesolp/actualizar-peso/${usuarioId}`;
    return this.http.put(url, { peso, unidad }, { headers: this.headers });
  }
  // gestionar-mis-ligas editar y eliminar
  eliminarUltimoPeso(usuarioId: string): Observable<any> {
    const url = `${base_url}/registropesolp/eliminar-ultimo-peso/${usuarioId}`;
    return this.http.delete(url, { headers: this.headers });
  }


//historial  tabla de peso--gestionar-mis-ligas mis registros
  getHistorialConDiferencias(
    usuarioId: string,
    page: number = 1
  ): Observable<any> {
    const url = `${base_url}/registropesolp/historial/${usuarioId}`;
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<any>(url, {
      params,
      ...this.headers,
    });
  }

  // gestionar-mis-ligas editar

  getUltimos5PesosConDiferencias(usuarioId: string): Observable<any> {
    const url = `${base_url}/registropesolp/ultimos/${usuarioId}`;
    return this.http.get<any>(url, this.headers);
  }
//  descargar pdf
descargarHistorialPesoPDF(usuarioId: string): void {
    const url = `${base_url}/registropesolp/descargar-pdf/${usuarioId}`;

    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'historial-peso.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error al descargar PDF:', err);
      },
    });
  }

}
