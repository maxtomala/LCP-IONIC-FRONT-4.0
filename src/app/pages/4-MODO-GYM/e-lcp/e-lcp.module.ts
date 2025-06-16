import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELCPPageRoutingModule } from './e-lcp-routing.module';

import { ELCPPage } from './e-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELCPPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [ELCPPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA para componentes web

})
export class ELCPPageModule {}
