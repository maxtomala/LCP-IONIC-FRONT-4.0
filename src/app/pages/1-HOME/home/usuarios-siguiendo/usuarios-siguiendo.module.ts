import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosSiguiendoPageRoutingModule } from './usuarios-siguiendo-routing.module';

import { UsuariosSiguiendoPage } from './usuarios-siguiendo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosSiguiendoPageRoutingModule
  ],
  declarations: [UsuariosSiguiendoPage]
})
export class UsuariosSiguiendoPageModule {}
