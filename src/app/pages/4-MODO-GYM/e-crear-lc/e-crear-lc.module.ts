import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECrearLcPageRoutingModule } from './e-crear-lc-routing.module';

import { ECrearLcPage } from './e-crear-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECrearLcPageRoutingModule
  ],
  declarations: [ECrearLcPage]
})
export class ECrearLcPageModule {}
