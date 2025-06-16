import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;

  @ViewChild('googleBtn', { static: true }) googleBtn: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private usuarioService: UsuarioService,

  ) {}

  ngOnInit() {
       this.loginForm = this.fb.group({
      email: ['test5@gmail.com', [Validators.required, Validators.email]],
      password: ['1', Validators.required],
      remember: [false],
    });

    this.initGoogleSignIn();
  }


login() {
    const emailControl = this.loginForm.get('email');
    const rememberControl = this.loginForm.get('remember');

    if (emailControl?.value) {
      localStorage.setItem('email', emailControl.value);
    }

    if (rememberControl?.value) {
      localStorage.setItem('remember', 'true');
    } else {
      localStorage.removeItem('remember');
      localStorage.removeItem('email');
    }

    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        console.log(resp);
        const tokenInvitacion = localStorage.getItem('tokenInvitacion');
        console.log('Token de invitación recibido:', tokenInvitacion);

        if (tokenInvitacion) {
          let idLiga = this.parseJwtByInvitacion(tokenInvitacion);
          if (idLiga) {
            let idusuario = resp.id;

            // Primero intenta unirse a la liga con el primer servicio
            this.usuarioService.unirseALiga(idusuario, idLiga.ligaId).subscribe(
              (resp) => {
                Swal.fire(
                  '¡Bienvenido a la liga!',
                  'Te has unido correctamente a la liga.',
                  'success'
                );
                console.log(resp);
                localStorage.removeItem('tokenInvitacion'); // Eliminar el token de invitación después de unirse exitosamente a la liga
                this.router.navigateByUrl('/');
              },
              (err) => {
                console.error(
                  'Error al unirse a la liga con el primer servicio:',
                  err
                );

                if (
                  err.error?.mensaje ===
                  'Esta liga ya tiene el número máximo de 10 participantes.'
                ) {
                  Swal.fire(
                    'Error',
                    'Esta liga ya tiene el número máximo de 10 participantes.',
                    'error'
                  );
                } else {
                  Swal.fire('Error', 'No se pudo unir a la liga.', 'error');
                }
                localStorage.removeItem('tokenInvitacion'); // También eliminar el token si hay un error al intentar unirse a la liga
                this.router.navigateByUrl('/');

                // Si hay un error, intenta con el segundo servicio
                this.usuarioService
                  .unirseALiga2(idusuario, idLiga.ligaId)
                  .subscribe(
                    (resp) => {
                      Swal.fire(
                        '¡Bienvenido a la liga!',
                        'Te has unido correctamente a la liga.',
                        'success'
                      );
                      console.log(resp);
                      localStorage.removeItem('tokenInvitacion'); // Eliminar el token de invitación después de unirse exitosamente a la liga
                      this.router.navigateByUrl('/');
                    },
                    (err) => {
                      console.error(
                        'Error al unirse a la liga con el segundo servicio:',
                        err
                      );
                      // Verificar si el error indica que la liga ya tiene el máximo de participantes
                      if (
                        err.error?.mensaje ===
                        'Esta liga ya tiene el número máximo de 10 participantes.'
                      ) {
                        Swal.fire(
                          'Error',
                          'Esta liga ya tiene el número máximo de 10 participantes.',
                          'error'
                        );
                      } else {
                        // Si hay otro tipo de error
                        Swal.fire(
                          'Error',
                          'No se pudo unir a la liga.',
                          'error'
                        );
                      }
                      localStorage.removeItem('tokenInvitacion'); // También eliminar el token si hay un error al intentar unirse a la liga
                      this.router.navigateByUrl('/');
                    }
                  );
              }
            );
          } else {
            console.error('Error al procesar el token de invitación');
            localStorage.removeItem('tokenInvitacion');
            this.router.navigateByUrl('/');
          }
        } else {
          this.router.navigateByUrl('/');
        }
      },
      (err) => {
        Swal.fire('Error', err.error.msg, 'error');
        localStorage.removeItem('tokenInvitacion'); // Considerar si debería eliminarse aquí también
      }
    );
     }

  goToRecover() {
    this.router.navigate(['/auth/forgot-password']);
  }

  initGoogleSignIn() {
    // Espera a que google esté definido
    if (window['google']) {
      google.accounts.id.initialize({
        client_id: 'TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com',
        callback: (response: any) => this.handleCredentialResponse(response),
      });

      google.accounts.id.renderButton(
        this.googleBtn.nativeElement,
        { theme: 'outline', size: 'large', width: '100%' } // Opciones de botón
      );

      // También puedes usar prompt para mostrar el One Tap:
      // google.accounts.id.prompt();
    }
  }

  handleCredentialResponse(response: any) {
    // Este token JWT lo envías a tu backend para validar y autenticar
    console.log('ID Token:', response.credential);

    // Por ejemplo, si quieres manejar navegación después:
    this.ngZone.run(() => {
      // Aquí haces login con tu backend o guardas token
      this.router.navigate(['/home']); // O ruta después del login
    });
  }


    parseJwtByInvitacion(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Error al decodificar el token JWT:', e);
      return null;
    }
  }
}
