import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBuscadorLcpPageRoutingModule } from './e-buscador-lcp-routing.module';

import { EBuscadorLcpPage } from './e-buscador-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBuscadorLcpPageRoutingModule
  ],
  declarations: [EBuscadorLcpPage]
})
export class EBuscadorLcpPageModule {}
