import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELcp2PageRoutingModule } from './e-lcp-2-routing.module';

import { ELcp2Page } from './e-lcp-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELcp2PageRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí

  ],
  declarations: [ELcp2Page]
})
export class ELcp2PageModule {}
