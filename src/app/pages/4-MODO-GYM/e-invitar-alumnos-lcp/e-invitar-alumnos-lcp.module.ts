import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EInvitarAlumnosLcpPageRoutingModule } from './e-invitar-alumnos-lcp-routing.module';

import { EInvitarAlumnosLcpPage } from './e-invitar-alumnos-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EInvitarAlumnosLcpPageRoutingModule
  ],
  declarations: [EInvitarAlumnosLcpPage]
})
export class EInvitarAlumnosLcpPageModule {}
