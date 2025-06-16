import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EInvitarEntrenadorLcpPageRoutingModule } from './e-invitar-entrenador-lcp-routing.module';

import { EInvitarEntrenadorLcpPage } from './e-invitar-entrenador-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EInvitarEntrenadorLcpPageRoutingModule
  ],
  declarations: [EInvitarEntrenadorLcpPage]
})
export class EInvitarEntrenadorLcpPageModule {}
