import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELCPageRoutingModule } from './e-lc-routing.module';

import { ELCPage } from './e-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELCPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ELCPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA para componentes web

})
export class ELCPageModule {}
