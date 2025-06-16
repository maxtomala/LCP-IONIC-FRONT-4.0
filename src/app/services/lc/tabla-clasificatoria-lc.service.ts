import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { RegistroPesoLc } from 'src/app/models/lc/registro-peso-lc.model';

const base_url = environment.base_url;


interface PodioSemana {
  semana: number;
  anio: number;
  podio: any[]; // Aquí puedes definir mejor la interfaz según tus datos
}

interface RespuestaPodioPaginado {
  totalSemanas: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
  semanas: PodioSemana[];
}

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

  obtenerPodioPaginado(
    ligaId: string,
    page: number = 1,
    limit: number = 1
  ): Observable<RespuestaPodioPaginado> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    const url = `${base_url}/tabla-clasificatoria-lc/tabla/podio/${ligaId}`;

    return this.http.get<RespuestaPodioPaginado>(url, { params });
  }

}
