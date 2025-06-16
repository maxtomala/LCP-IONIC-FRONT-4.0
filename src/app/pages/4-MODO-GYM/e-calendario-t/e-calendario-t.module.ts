import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECalendarioTPageRoutingModule } from './e-calendario-t-routing.module';

import { ECalendarioTPage } from './e-calendario-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECalendarioTPageRoutingModule
  ],
  declarations: [ECalendarioTPage]
})
export class ECalendarioTPageModule {}
