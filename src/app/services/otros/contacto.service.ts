import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }



  enviarForm(name: string, email: string, phone: string, message: string, privacyPolicy: boolean): Observable<any> {
    const url = `${base_url}/consulta-online/enviar-form`; // Asegúrate de que la URL sea correcta
    const formData = { name, email, phone, message, privacyPolicy };
    console.log("Datos del formulario a enviar:", formData);
    return this.http.post(url, formData);
  }
}
