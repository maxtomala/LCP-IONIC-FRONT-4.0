import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionTorneoPageRoutingModule } from './configuracion-torneo-routing.module';

import { ConfiguracionTorneoPage } from './configuracion-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionTorneoPageRoutingModule
  ],
  declarations: [ConfiguracionTorneoPage]
})
export class ConfiguracionTorneoPageModule {}
