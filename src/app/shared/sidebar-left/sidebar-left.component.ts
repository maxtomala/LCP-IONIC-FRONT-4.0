import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent implements OnInit{
  // carga los datos del user
<<<<<<< HEAD
  public usuario: Usuario;
=======
public usuario!: Usuario;
>>>>>>> a2f79f3 (se soluciona error version)

  submenuVisible = false;

  constructor(
    private usuarioService: UsuarioService,
    public menuCtrl: MenuController
  ) {}


  ngOnInit() {
<<<<<<< HEAD
      // carga los datos del user 
=======
      // carga los datos del user
>>>>>>> a2f79f3 (se soluciona error version)
    this.usuario = this.usuarioService.usuario;
  }

  toggleSubmenu() {
    this.submenuVisible = !this.submenuVisible;
  }

  logout() {
    this.usuarioService.logout();
  }
}
