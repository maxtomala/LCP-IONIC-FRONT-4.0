import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESolicitarCompeticionLcpPageRoutingModule } from './e-solicitar-competicion-lcp-routing.module';

import { ESolicitarCompeticionLcpPage } from './e-solicitar-competicion-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESolicitarCompeticionLcpPageRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí

  ],
  declarations: [ESolicitarCompeticionLcpPage]
})
export class ESolicitarCompeticionLcpPageModule {}
