import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { BiografiaHomeComponent } from '../biografia-home/biografia-home.component';
import { TarjetaSocioComponent } from '../tarjeta-socio/tarjeta-socio.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [PerfilPage, BiografiaHomeComponent, TarjetaSocioComponent],
})
export class PerfilPageModule {}
