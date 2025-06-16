import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

import { LigaCorporal } from '../../models/lc/liga-corporal.model';
import { environment } from '../../../environments/environment';
import { RegistroPesoLc } from '../../models/lc/registro-peso-lc.model';
import { UsuarioService } from '../usuario.service';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class LigaCorporalService {
  public id: string;
  public ligacorporal: LigaCorporal;

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
    private usuarioService: UsuarioService
  ) {}

  getLigaCorporalId(): string {
    return this.ligacorporal ? this.ligacorporal._id || '' : '';
  }
  get _idLiga(): string {
    // Supongamos que tienes una propiedad en tu servicio que almacena el ID de la liga actual
    return this.ligacorporal?._id || ''; // Si la propiedad ligacorporal es nula, retorna un string vacío
  }

  // // funciona  de toda la bd  no necesito essto***
  // obtenerTodasLasLigas(_id: string) {
  //   const url = `${base_url}/ligaCorporal/todaslasligascorporales/${_id}`;
  //   return this.http.get(url, { headers: this.headers })
  //     .pipe(
  //       map((resp: { ok: boolean, ligasLC: LigaCorporal[] }) =>resp.ligasLC

  //       //   {
  //       //   return resp.ligasLC;
  //       // }
  //     )
  //     );
  // }

  //  funciona ** falta por comprobar?????

  obtenerParticipantesPorLiga(_id: string, desde: number) {
    // Modificar la URL para incluir el parámetro 'desde'
    const url = `${base_url}/ligaCorporal/${_id}/${_id}?desde=${desde}`;

    return this.http.get(url, { headers: this.headers }).pipe(
      map(
        (resp: {
          ok: boolean;
          participantes: RegistroPesoLc[];
          totalUsuarios: number;
        }) => {
          console.log('Participantes obtenidos:', resp);
          return resp.participantes;
          // <!-- solucionar lo de totalusuario  de error con el return del servicio -->
        }
      )
    );
  }

  // funciona
  eliminarParticipante(_ligaId: string, participanteId: string) {
    const url = `${base_url}/ligaCorporal/${_ligaId}/participante/${participanteId}`;
    return this.http.delete(url, { headers: this.headers });
  }

  // funciona
  eliminarLiga(_ligaId: string) {
    const url = `${base_url}/ligaCorporal/${_ligaId}`;
    console.log('URL de eliminación:', url); // Muestra la URL que se usará para la solicitud de eliminación

    return this.http.delete(url, { headers: this.headers }).pipe(
      tap({
        next: (response) => {
          console.log(
            `Liga con ID ${_ligaId} ha sido eliminada con éxito.`,
            response
          );
        },
        error: (error) => {
          console.error(`Error al eliminar la liga con ID ${_ligaId}:`, error);
        },
      })
    );
  }

  // funciona

  actualizarLiga(_id: string, nombre: string, objetivo: string) {
    const url = `${base_url}/ligaCorporal/${_id}`;
    return this.http
      .put(url, { nombre, objetivo }, { headers: this.headers })
      .pipe(
        tap((resp) => {
          // Esto imprimirá la respuesta completa antes de cualquier otro procesamiento.
          console.log('Respuesta completa recibida del servidor:', resp);
        }),
        map((resp: { ok: boolean; ligasLC: LigaCorporal[] }) => {
          // Verificar y mostrar si la respuesta es OK
          console.log('Estado OK de la respuesta:', resp.ok);
          if (resp.ok) {
            console.log('Ligas recibidas del servidor:', resp);
          } else {
            console.log('Respuesta recibida sin éxito:', resp);
          }
          return resp.ligasLC;
        }),
        catchError((error) => {
          // Registrar el error recibido si la solicitud falla
          console.error('Error al obtener las ligas:', error);
          return throwError(error);
        })
      );
  }

  // funciona
  crearLiga(_id: string, nombre: string, objetivo: string): Observable<any> {
    const url = `${base_url}/ligaCorporal/${_id}`;
    console.log(
      `Preparando para enviar solicitud para crear una liga con nombre: ${nombre}, objetivo: ${objetivo}`
    );
    return this.http.post(url, { nombre, objetivo }, { headers: this.headers });
  }

  //  funciona
  obtenerTodasLasLigasPorIdUsuario(_id: string) {
    // Construir la URL completa para la solicitud
    const url = `${base_url}/ligaCorporal/${_id}`;
    console.log('URL construida para la solicitud:', url); // Mostrar la URL que será utilizada para la solicitud

    return this.http.get(url, { headers: this.headers }).pipe(
      tap((resp) => {
        // Esto imprimirá la respuesta completa antes de cualquier otro procesamiento.
        console.log('Respuesta completa recibida del servidor:', resp);
      }),
      map((resp: { ok: boolean; ligasConId: LigaCorporal[] }) => {
        // Verificar y mostrar si la respuesta es OK
        console.log('Estado OK de la respuesta:', resp.ok);
        if (resp.ok) {
          console.log('Ligas recibidas del servidor:', resp.ligasConId);
        } else {
          console.log('Respuesta recibida sin éxito:', resp);
        }
        return resp.ligasConId;
      }),
      catchError((error) => {
        // Registrar el error recibido si la solicitud falla
        console.error('Error al obtener las ligas:', error);
        return throwError(error);
      })
    );
  }

  generarEnlaceInvitacion(
    idLiga: string,
    idUsuarioInvitado: string
  ): Observable<any> {
    const url = `${base_url}/ligaCorporal/ligas/invitacion`;
    const body = { idLiga, idUsuarioInvitado };

    console.log('URL:', url);
    console.log('ID Liga:', idLiga);
    console.log('ID Usuario Invitado:', idUsuarioInvitado);
    console.log('Request Body:', body);

    return this.http.post(url, body, { headers: this.headers });
  }

  //  se ha colocado en el usuario.service
  // Método para unirse a una liga
  unirseALiga(usuarioId: string, ligaId: string): Observable<any> {
    const url = `${base_url}/ligaCorporal/unirse`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.post(url, { usuarioId, ligaId }, { headers });
  }

  // Método para actualizar la imagen grupal de la liga
  actualizarImagenGrupal(
    idLiga: string,
    idUsuario: string,
    imagen: File
  ): Observable<any> {
    const url = `${base_url}/imgGrupalLc/img-grupal-lc/${idLiga}/${idUsuario}`;
    const formData = new FormData();
    formData.append('imagen', imagen);

    console.log('Enviando solicitud PUT a:', url);
    console.log('Datos enviados:', formData);

    return this.http.put(url, formData, { headers: this.headers }).pipe(
      tap((response) => {
        console.log('Respuesta recibida:', response);
      })
    );
  }

  // Método para obtener la imagen grupal de la liga
  obtenerImagenGrupal(idLiga: string, foto: string): Observable<Blob> {
    const url = `${base_url}/imgGrupalLc/img-grupal-lc/${idLiga}/${foto}`;

    console.log('Enviando solicitud GET a:', url);

    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((blob) => {
        console.log('Blob recibido:', blob);
      })
    );
  }
}
