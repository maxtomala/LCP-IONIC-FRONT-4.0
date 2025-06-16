import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECrearTPageRoutingModule } from './e-crear-t-routing.module';

import { ECrearTPage } from './e-crear-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECrearTPageRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí

  ],
  declarations: [ECrearTPage]
})
export class ECrearTPageModule {}
