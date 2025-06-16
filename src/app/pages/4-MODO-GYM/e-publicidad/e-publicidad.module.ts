import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EPublicidadPageRoutingModule } from './e-publicidad-routing.module';

import { EPublicidadPage } from './e-publicidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EPublicidadPageRoutingModule
  ],
  declarations: [EPublicidadPage]
})
export class EPublicidadPageModule {}
