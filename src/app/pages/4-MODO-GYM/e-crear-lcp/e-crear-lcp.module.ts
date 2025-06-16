import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECrearLcpPageRoutingModule } from './e-crear-lcp-routing.module';

import { ECrearLcpPage } from './e-crear-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECrearLcpPageRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí
  ],
  declarations: [ECrearLcpPage]
})
export class ECrearLcpPageModule {}
