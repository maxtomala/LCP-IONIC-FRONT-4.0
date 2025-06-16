import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario

  constructor(
    private usuarioService: UsuarioService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }
  openSidebarLeft() {
    this.menuCtrl.open('left-menu');
  }
}
