import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrofeosUsuarioPageRoutingModule } from './trofeos-usuario-routing.module';

import { TrofeosUsuarioPage } from './trofeos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrofeosUsuarioPageRoutingModule
  ],
  declarations: [TrofeosUsuarioPage]
})
export class TrofeosUsuarioPageModule {}
