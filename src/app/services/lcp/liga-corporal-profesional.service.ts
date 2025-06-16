import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LigaCorporalProfesional } from '../../models/lcp/liga-corporal-profesional.model';
import { UsuarioService } from '../usuario.service';
import { RegistroPesoLcp } from '../../models/registro-peso-lcp.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LigaCorporalProfesionalService {

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


  private transformarUsuarios(resultados: any[]) {
    return resultados.map(user => ({
      nombre: user.nombre,
      email: user.email,
      img: user.img,
      imgUrl: user.img, // Aquí asignamos la imagen a la propiedad imgUrl
      google: user.google,
      role: user.role,
      uid: user.uid,
      genero: user.genero,
      pais: user.pais,
      fechaNacimiento: user.fechaNacimiento,
      altura: user.altura,
      instagram: user.instagram,
      objetivo: user.objetivo,
      pesoIdeal: user.pesoIdeal,
      fraseCelebre: user.fraseCelebre
    }));
  }




//  funciona
obtenerTodasLasLigasPorIdUsuario(_id: string) {
  // Construir la URL completa para la solicitud
  const url = `${base_url}/ligaCorporalProfesional/todaslasligasCP/${_id}`;
  console.log('URL construida para la solicitud:', url); // Mostrar la URL que será utilizada para la solicitud

  return this.http.get(url, { headers: this.headers })
    .pipe(
      tap(resp => {
        // Esto imprimirá la respuesta completa antes de cualquier otro procesamiento.
        console.log('Respuesta completa recibida del servidor:', resp);
      }),
      map((resp: { ok: boolean, ligasConId: any[] }) => {
        // Verificar y mostrar si la respuesta es OK
        console.log('Estado OK de la respuesta:', resp.ok);
        if (resp.ok) {
          console.log('Ligas recibidas del servidor:', resp.ligasConId);
        } else {
          console.log('Respuesta recibida sin éxito:', resp);
        }
        return resp.ligasConId;
      }),
      catchError(error => {
        // Registrar el error recibido si la solicitud falla
        console.error('Error al obtener las ligas:', error);
        return throwError(error);
      })
    );

}

//  funciona

// crearLigaCorporalProfesional(data: {
//   _id: string;
//   nombre: string;
//   objetivo: string;
//   pais: string;
//   genero: string;
//   quiniela: string;
//   tipoEnfrentamiento: string;
// }): Observable<any> {
//   const { _id, nombre, objetivo, pais, genero, quiniela, tipoEnfrentamiento } = data;
//   const url = `${base_url}/ligaCorporalProfesional/ligaCorporalProfesional/${_id}`;

//   console.log('Datos recibidos para crear liga:', data);
//   console.log('ID de la liga:', _id);
//   console.log('Nombre de la liga:', nombre);
//   console.log('Objetivo de la liga:', objetivo);
//   console.log('País de la liga:', pais);
//   console.log('Género de la liga:', genero);
//   console.log('Quiniela de la liga:', quiniela);
//   console.log('Tipo de enfrentamiento:', tipoEnfrentamiento);
//   console.log('URL para crear liga:', url);

//   return this.http
//     .post(url, { nombre, objetivo, pais, genero, quiniela, tipoEnfrentamiento }, { headers: this.headers })
//     .pipe(
//       map((resp: { ok: boolean; liga: LigaCorporalProfesional }) => {
//         console.log('Respuesta del servidor:', resp);
//         return resp.liga;
//       })
//     );
// }

crearLigaCorporalProfesional(data: {
  _id: string;
  nombre: string;
  objetivo: string;
  pais: string;
  genero: string;
  quiniela: string;
  tipoEnfrentamiento: string;
  grupo: string;
}): Observable<any> {
  const url = `${base_url}/ligaCorporalProfesional/ligaCorporalProfesional/${data._id}`;

  console.log('Datos recibidos para crear liga:', data);
  console.log('URL para crear liga:', url);

  return this.http.post(url, data, { headers: this.headers })
    .pipe(
      tap((resp: any) => {
        console.log('Respuesta completa recibida del servidor:', resp);
      }),
      map((resp: { ok: boolean; liga: any }) => {
        console.log('Liga creada exitosamente:', resp.liga);
        return resp.liga;
      }),
      catchError(error => {
        console.error('Error al crear la liga:', error);
        return throwError(() => error);
      })
    );
}




//  funciona

actualizarLigaCorporalProfesional(
  _id: string,
  nombre: string,
  objetivo: string,
  pais: string,
  genero: string,
  quiniela: string,
  tipoEnfrentamiento: string,
  grupo: string,

) {
  const url = `${base_url}/ligaCorporalProfesional/${_id}`;
  return this.http.put(
    url,
    { nombre, objetivo, pais, genero, quiniela, tipoEnfrentamiento,grupo},
    { headers: this.headers }
  );
}



eliminarLigaCorporalProfesional(_id: string) {
  const url = `${base_url}/ligaCorporalProfesional/${_id}`;
  return this.http.delete(url, { headers: this.headers });
}

eliminarParticipanteProfesional(_ligaId: string, participanteId: string) {
  const url = `${base_url}/ligaCorporalProfesional/${_ligaId}/participante/${participanteId}`;
  return this.http.delete(url, { headers: this.headers });
}


// funciona


obtenerParticipantesPorLiga(_id: string, desde: number) {
  // Modificar la URL para incluir el parámetro 'desde'
  const url = `${base_url}/ligaCorporalProfesional/ligaCorporalProfesional/${_id}/${_id}?desde=${desde}`;

  return   this.http.get(url, { headers: this.headers })
    .pipe(
      map((resp: { ok: boolean, participantes: RegistroPesoLcp[] , totalUsuarios: number }) => {
        console.log("Participantes obtenidos:", resp);
        return resp.participantes;
        // <!-- solucionar lo de totalusuario  de error con el return del servicio -->
      })
    );
}



generarEnlaceInvitacion(idLiga: string, idUsuarioInvitado: string, ): Observable<any> {
  const url = `${base_url}/ligaCorporalProfesional/ligas/invitacion`;
  const body = { idLiga, idUsuarioInvitado,  };

  return this.http.post(url, body, { headers: this.headers });
}



//  se ha colocado en el usuario.service
// Método para unirse a una liga
unirseALiga(usuarioId: string, ligaId: string): Observable<any> {
  const url = `${base_url}/ligaCorporalProfesional/unirse`;
  const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
  return this.http.post(url, { usuarioId, ligaId }, { headers });
}



unirsePorGrupo(ligaId: string, usuarioId: string): Observable<any> {
  const url = `${base_url}/ligaCorporalProfesional/unirse-por-grupo`;
  return this.http.post<any>(url, { ligaId, usuarioId }, { headers: this.headers }).pipe(
  );
}
obtenerTodasLasLigas2(desde: number = 0) {
  const url = `${base_url}/ligaCorporalProfesional?desde=${desde}`;
  console.log('Request URL:', url); // Log para la URL

  return this.http.get<any>(url, { headers: this.headers });

  // .pipe(
  //   map((resp: any) => {
  //     const ligasProfesionales = resp.ligaProfesionalCorporal.map(
  //       (liga: any) =>
  //         new LigaProfesionalCorporal(
  //           liga.fechaRegistro,
  //           liga.nombre,
  //           liga.pais,
  //           liga.genero,
  //           liga.objetivo,
  //           // liga.quiniela,
  //           // liga.enlaces
  //           // Agrega más propiedades según la estructura de tu respuesta
  //         )
  //     );

  //     return {
  //       total: resp.total,
  //       ligaProfesionalCorporal: ligasProfesionales,
  //     };
  //   })
  // );
}

// todaslasLCP(desde: number = 0, limite: number = 10) {
//   const url = `${base_url}/ligaCorporalProfesional/todaslasLCP`;
//   console.log('Request URL:', url); // Log para la URL

//   return this.http.get<any>(url, { headers: this.headers });

// }
todaslasLCP(desde: number = 0, limite: number = 10) {
  const url = `${base_url}/ligaCorporalProfesional/todaslasLCP`;
  console.log('Request URL:', url); // Log para la URL

  // Añadir los parámetros de paginación
  let params = new HttpParams().set('desde', desde.toString()).set('limite', limite.toString());

  return this.http.get<any>(url, { headers: this.headers, params });
}








// Método para actualizar la imagen grupal de la liga
actualizarImagenGrupal(idLiga: string, idUsuario: string, imagen: File): Observable<any> {
  const url = `${base_url}/imgGrupalLcp/img-grupal-lcp/${idLiga}/${idUsuario}`;
  const formData = new FormData();
  formData.append('imagen', imagen);

  console.log('Enviando solicitud PUT a:', url);
  console.log('Datos enviados:', formData);

  return this.http.put(url, formData, { headers: this.headers }).pipe(
    tap(response => {
      console.log('Respuesta recibida:', response);
    })
  );
}

// Método para obtener la imagen grupal de la liga
obtenerImagenGrupal(idLiga: string, foto: string): Observable<Blob> {
  const url = `${base_url}/imgGrupalLcp/img-grupal-lcp/${idLiga}/${foto}`;

  console.log('Enviando solicitud GET a:', url);

  return this.http.get(url, { responseType: 'blob' }).pipe(
    tap(blob => {
      console.log('Blob recibido:', blob);
    })
  );
}








}
