import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EInvitarAlumnosLcPageRoutingModule } from './e-invitar-alumnos-lc-routing.module';

import { EInvitarAlumnosLcPage } from './e-invitar-alumnos-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EInvitarAlumnosLcPageRoutingModule
  ],
  declarations: [EInvitarAlumnosLcPage]
})
export class EInvitarAlumnosLcPageModule {}
