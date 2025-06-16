import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EEstadoSolicitudCompeticionLcpPageRoutingModule } from './e-estado-solicitud-competicion-lcp-routing.module';

import { EEstadoSolicitudCompeticionLcpPage } from './e-estado-solicitud-competicion-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EEstadoSolicitudCompeticionLcpPageRoutingModule
  ],
  declarations: [EEstadoSolicitudCompeticionLcpPage]
})
export class EEstadoSolicitudCompeticionLcpPageModule {}
