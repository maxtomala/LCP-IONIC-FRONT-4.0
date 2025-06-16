import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EAceptarPesoTPageRoutingModule } from './e-aceptar-peso-t-routing.module';

import { EAceptarPesoTPage } from './e-aceptar-peso-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EAceptarPesoTPageRoutingModule
  ],
  declarations: [EAceptarPesoTPage]
})
export class EAceptarPesoTPageModule {}
