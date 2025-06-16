import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ET2PageRoutingModule } from './e-t-2-routing.module';

import { ET2Page } from './e-t-2.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ET2PageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ET2Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class ET2PageModule {}
