import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioInicialPageRoutingModule } from './formulario-inicial-routing.module';

import { FormularioInicialPage } from './formulario-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioInicialPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [FormularioInicialPage]
})
export class FormularioInicialPageModule {}
