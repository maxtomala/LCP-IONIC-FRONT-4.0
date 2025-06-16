import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ERegistrarPesoInicialLcpPageRoutingModule } from './e-registrar-peso-inicial-lcp-routing.module';

import { ERegistrarPesoInicialLcpPage } from './e-registrar-peso-inicial-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ERegistrarPesoInicialLcpPageRoutingModule
  ],
  declarations: [ERegistrarPesoInicialLcpPage]
})
export class ERegistrarPesoInicialLcpPageModule {}
