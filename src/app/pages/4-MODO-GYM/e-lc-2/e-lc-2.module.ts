import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELc2PageRoutingModule } from './e-lc-2-routing.module';

import { ELc2Page } from './e-lc-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELc2PageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [ELc2Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],


})
export class ELc2PageModule {}
