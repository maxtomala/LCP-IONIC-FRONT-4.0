import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonFab, IonModal, ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

  // menu de navegacion por defecto
  segmentValue = 'mis-publicaciones';

  // menu de navegacion
  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
