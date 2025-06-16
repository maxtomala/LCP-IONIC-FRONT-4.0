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

export class TablaClasificatoriaLcService {

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


    // Obtener la clasificación paginada por semana
obtenerTablaSemana(
  ligaId: string,
  semana: number,
  anio: number,
  pagina: number = 1,
  limite: number = 10
): Observable<any> {
  const url = `${base_url}/tabla-clasificatoria-lc/obtener-tabla/${ligaId}?semana=${semana}&anio=${anio}&page=${pagina}&limit=${limite}`;
  return this.http.get<any>(url);
}

  obtenerPodioUltimas8Semanas(
    ligaId: string,
    pagina: number = 1,
    limite: number = 10
  ): Observable<any> {
    const url = `${base_url}/ligaCorporal/${ligaId}/podioUltimas8Semanas?page=${pagina}&limit=${limite}`;
    return this.http.get<any>(url);
  }

}
