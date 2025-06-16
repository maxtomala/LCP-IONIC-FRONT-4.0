import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionLcPageRoutingModule } from './configuracion-lc-routing.module';

import { ConfiguracionLcPage } from './configuracion-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionLcPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ConfiguracionLcPage,

  ]
})
export class ConfiguracionLcPageModule {}
