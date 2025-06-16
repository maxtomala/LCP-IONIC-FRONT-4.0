import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesCuentaPageRoutingModule } from './ajustes-cuenta-routing.module';

import { AjustesCuentaPage } from './ajustes-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesCuentaPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [AjustesCuentaPage]
})
export class AjustesCuentaPageModule {}
