import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EAceptarPesoLcpPageRoutingModule } from './e-aceptar-peso-lcp-routing.module';

import { EAceptarPesoLcpPage } from './e-aceptar-peso-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EAceptarPesoLcpPageRoutingModule
  ],
  declarations: [EAceptarPesoLcpPage]
})
export class EAceptarPesoLcpPageModule {}
