import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionLcpPageRoutingModule } from './configuracion-lcp-routing.module';

import { ConfiguracionLcpPage } from './configuracion-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionLcpPageRoutingModule
  ],
  declarations: [
    ConfiguracionLcpPage,

  ]
})
export class ConfiguracionLcpPageModule {}
