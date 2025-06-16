import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable, catchError, delay, map, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

import { Usuario } from 'src/app/models/usuario.model';
import { LoginForm } from 'src/app/interfaces/login-form.interface';
import { RegisterForm } from 'src/app/interfaces/register-form.interface';


// import { Usuario } from '../models/usuario.model';





const base_url = environment.base_url;

declare const google: any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

// Asegúrate de que el usuario ya esté cargado antes de usar sus datos. Por ejemplo, que tu componente espere que el usuario esté listo, o que validarToken() haya terminado.
//   private _usuario = new BehaviorSubject<Usuario | null>(null);
//  usuario$ = this._usuario.asObservable(); //  se suscribe y sólo cuando llegan los datos se actualiza.





  public auth2: any;
  public usuario: Usuario

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,

  ){
// En el constructor sólo inicializas la variable usuario con valores vacíos o undefined para que exista el objeto y no dé error al usarlo.
    this.usuario = new Usuario(
      '', '', '', '',     undefined, undefined, undefined, undefined, undefined, undefined,
    //atributos nuevos
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined,
  );

        this.googleInit();
    // Capturar el token de la URL cuando se instancia el servicio
  }

  // funciona
validarToken(): Observable<boolean> {
  return this.http
    .get(`${base_url}/login/renew`, {
      headers: {
        'x-token': this.token,
      },
    })
    .pipe(
      map((resp: any) => {
        const {
          nombre,
          email,
          role,

          altura,
          apellido1,
          apellido2,
          codigoPostal,
          fechaNacimiento,
          fechaRegistro,

          fraseCelebre,
          genero,
          instagram,
          ligaC,
          ligaCP,
          objetivo,

          pais,
          profesion,
          telefono,
          deporte,

          totalCreditos,
          pesoIdealKg,
          pesoIdealLb,
          unidad,
          biografia,

          img = '',
          imgPortada = '',
          imgVerificadorLc = '',
          imgVerificadorLcp = '',
          google,
          uid,
        } = resp.usuario;

        this.usuario = new Usuario(
          nombre,       // 1
          email,        // 2
          '',           // 3 password vacío por seguridad
          role,         // 4
          altura,       // 5
          apellido1,    // 6
          apellido2,    // 7
          codigoPostal, // 8
          new Date(fechaNacimiento), // 9 convertir string a Date
          new Date(fechaRegistro),   // 10 convertir string a Date
          fraseCelebre, // 11
          genero,      // 12
          instagram,   // 13
          ligaC,       // 14
          ligaCP,      // 15
          objetivo,    // 16
          pais,        // 17
          profesion,   // 18
          telefono,    // 19
          deporte,     // 20
          totalCreditos, // 21
          pesoIdealKg,   // 22
          pesoIdealLb,   // 23
          unidad,       // 24
          biografia,    // 25
          img,          // 26
          imgPortada,   // 27
          imgVerificadorLc, // 28
          imgVerificadorLcp, // 29
          google,       // 30
          uid           // 31
        );
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError((error) => of(false))
    );
}











  // Capturar el token de invitación y almacenarlo en localStorage
  captureTokenFromUrl(route: ActivatedRoute): void {
    route.queryParams.subscribe(params => {
      const tokenInvitacion = params['tokenInvitacion'] || null;
      if (tokenInvitacion) {
        localStorage.setItem('tokenInvitacion', tokenInvitacion);
      }
    });
  }
// Usa el token de invitacion lc que carge de la localstrore
          getTokenInvitacion(): string | null {
            return localStorage.getItem('tokenInvitacion');
          }





  get token(): string {
    return localStorage.getItem('token') || '';
  }


  get uid(): string {
    return this.usuario?.uid || '';
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }





// funciona
  actualizarUsuario(uid: string, data: any): Observable<any> {
    const url = `${base_url}/usuarios/${uid}`;
    return this.http.put(url, data, this.headers);
  }



  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

 loginGoogle(token: string) {
     return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }



  googleInit() {

    google.accounts.id.initialize({
      client_id: "56958751669-f08nefmusqjnau1f88jif52m2cib6sgh.apps.googleusercontent.com",
      // callback: (response: any) => this.handleCredentialResponse(response)
    });

  }



  logout() {
    // https://developers.google.com/identity/sign-in/web/sign-in?hl=es-419
    localStorage.removeItem('token');
    //deja de aparecer nuestro google en el inicio de sesion
    // google.accounts.id.revoke(this.usuario.email, () => {
      // this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('auth/login');
      });
    // });
  // }
  // )
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  unirseALiga(usuarioId: string, ligaId: string): Observable<any> {
    console.log(usuarioId)
    console.log(localStorage.getItem('token'))
    const url = `${base_url}/ligacorporal/unirse`;
    const headers = { 'x-token': `Bearer ${localStorage.getItem('token')}` };

    console.log('URL de unirse a la liga:', url);
    console.log('Headers:', headers);
    console.log('Datos enviados:', { usuarioId, ligaId });


    return this.http.post(url, { usuarioId, ligaId },  this.headers).pipe(
      tap(response => {
        console.log('Respuesta al unirse a la liga:', response);
      },
      error => {
        console.error('Error al unirse a la liga:', error);
      })
    );
  }

  unirseALiga2(usuarioId: string, ligaId: string): Observable<any> {
    console.log(usuarioId)
    console.log(localStorage.getItem('token'))
    const url = `${base_url}/ligacorporalProfesional/unirse`;
    const headers = { 'x-token': `Bearer ${localStorage.getItem('token')}` };

    console.log('URL de unirse a la liga:', url);
    console.log('Headers:', headers);
    console.log('Datos enviados:', { usuarioId, ligaId });


    return this.http.post(url, { usuarioId, ligaId },  this.headers).pipe(
      tap(response => {
        console.log('Respuesta al unirse a la liga:', response);
      }, error => {
        console.error('Error al unirse a la liga:', error);
      })
    );
  }


  // unirseALiga(ligaId: string): Observable<any> {
  //   const url = `${base_url}/ligaCorporal/unirse`;
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'x-token': token || '',
  //     'x-token': `Bearer ${ligaId}`,
  //   });

  //   console.log('URL de unirse a la liga:', url);
  //   console.log('Headers:', headers);
  //   console.log('Liga ID enviado:', ligaId);

  //   return this.http.post(url, {}, { headers }).pipe(
  //     tap(response => {
  //       console.log('Respuesta al unirse a la liga:', response);
  //     }, error => {
  //       console.error('Error al unirse a la liga:', error);
  //     })
  //   );
  // }

  // unirseALiga(ligaId: string): Observable<any> {
  //   const url = `${base_url}/ligaCorporal/unirse`;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.getToken()}`
  //   });

  //   // Enviar solo ligaId ya que userId debería ser manejado por el backend a partir del token
  //   const body = { ligaId };

  //   return this.http.post(url, body, { headers });
  // }

  // Función para obtener el token almacenado en localStorage
  private getToken(): string | null {
    return localStorage.getItem('token');
  }







}
