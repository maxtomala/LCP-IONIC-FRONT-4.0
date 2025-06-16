import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  canActivate(
        // ruta que quiere abrir

    next: ActivatedRouteSnapshot,
     // estado con  y regresa un obseravle  q soluciona un bolean...
    state: RouterStateSnapshot) {

      return this.usuarioService.validarToken()
      .pipe(
        tap( estaAutenticado =>  {
          if ( !estaAutenticado ) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
}

};
