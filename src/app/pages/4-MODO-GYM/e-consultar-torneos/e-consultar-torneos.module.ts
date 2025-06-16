import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EConsultarTorneosPageRoutingModule } from './e-consultar-torneos-routing.module';

import { EConsultarTorneosPage } from './e-consultar-torneos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EConsultarTorneosPageRoutingModule
  ],
  declarations: [EConsultarTorneosPage]
})
export class EConsultarTorneosPageModule {}
