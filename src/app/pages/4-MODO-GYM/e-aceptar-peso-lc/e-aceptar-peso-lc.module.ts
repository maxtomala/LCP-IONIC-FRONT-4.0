import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EAceptarPesoLcPageRoutingModule } from './e-aceptar-peso-lc-routing.module';

import { EAceptarPesoLcPage } from './e-aceptar-peso-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EAceptarPesoLcPageRoutingModule
  ],
  declarations: [EAceptarPesoLcPage]
})
export class EAceptarPesoLcPageModule {}
