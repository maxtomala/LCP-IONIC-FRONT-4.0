import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ETPageRoutingModule } from './e-t-routing.module';

import { ETPage } from './e-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ETPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    ETPage,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class ETPageModule {}
