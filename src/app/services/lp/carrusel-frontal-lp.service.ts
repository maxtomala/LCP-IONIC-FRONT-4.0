
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class CarruselFrontalLpService {
  constructor(
    private http: HttpClient,
  ) {}

  obtenercarruselfrontal(tipo: string, id: string): Observable<any>  {
    const url = `${base_url}/carrusel/imagen-frontal/${tipo}/${id}`;
    return this.http.get<any>(url);
  }
  subirImagenFrontal(tipo: string, id: string, archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', archivo);

    console.log(`Preparando para subir la imagen frontal - Tipo: ${tipo}, ID: ${id}, Archivo: ${archivo.name}`); // Log inicial

    return this.http.post(`${base_url}/carrusel/imagen-frontal/${tipo}/${id}`, formData).pipe(
      tap(
        response => console.log('Respuesta del servidor en subirImagenFrontal:', response), // Log de respuesta
        error => console.error('Error al subir la imagen frontal:', error) // Log de error
      )
    );
  }

  // Método para borrar una imagen
  borrarImagenFrontal(
    tipo: string,
    id: string,
    nombreArchivo: string
  ): Observable<any> {
    return this.http.delete(
      `${base_url}/carrusel/imagen-frontal/${tipo}/${id}/${nombreArchivo}`
    );
  }
  seleccionarImagen(tipo: string, id: string): Observable<any> {
    return this.http.get(
      `${base_url}/carrusel/imagen-frontal/${tipo}/${id}`
    );
  }








}
