import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELcp3PageRoutingModule } from './e-lcp-3-routing.module';

import { ELcp3Page } from './e-lcp-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ELcp3PageRoutingModule,

  ],
  declarations: [ELcp3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA para componentes web

})
export class ELcp3PageModule {}
