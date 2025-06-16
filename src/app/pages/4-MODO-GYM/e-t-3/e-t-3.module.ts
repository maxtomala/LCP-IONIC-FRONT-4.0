import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ET3PageRoutingModule } from './e-t-3-routing.module';

import { ET3Page } from './e-t-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ET3PageRoutingModule
  ],
  declarations: [ET3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA para componentes web

})
export class ET3PageModule {}
