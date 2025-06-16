import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilFormularioPageRoutingModule } from './perfil-formulario-routing.module';

import { PerfilFormularioPage } from './perfil-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilFormularioPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [PerfilFormularioPage]
})
export class PerfilFormularioPageModule {}
