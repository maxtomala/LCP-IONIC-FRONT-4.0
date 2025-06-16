import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionLpPageRoutingModule } from './configuracion-lp-routing.module';

import { ConfiguracionLpPage } from './configuracion-lp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionLpPageRoutingModule,

  ],
  declarations: [
    ConfiguracionLpPage,

]
})
export class ConfiguracionLpPageModule {}
