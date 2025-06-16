import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBuscadorTPageRoutingModule } from './e-buscador-t-routing.module';

import { EBuscadorTPage } from './e-buscador-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBuscadorTPageRoutingModule
  ],
  declarations: [EBuscadorTPage]
})
export class EBuscadorTPageModule {}
