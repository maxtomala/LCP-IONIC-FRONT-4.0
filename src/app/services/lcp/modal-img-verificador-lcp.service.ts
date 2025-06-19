import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ModalImgVerificadorLcpService {
  constructor(private http: HttpClient) {}

  actualizarImagenVerificadorLcp(imagen: File, tipo: 'usuarios', id: string) {
    const formData = new FormData();
    formData.append('imagen', imagen);

    const url = `${base_url}/verificador-lcp/actualizar/${tipo}/${id}`;
    return this.http.put(url, formData);
  }
}
