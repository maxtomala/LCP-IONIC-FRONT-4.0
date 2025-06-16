import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EEstadoSolicitudCompeticionTPageRoutingModule } from './e-estado-solicitud-competicion-t-routing.module';

import { EEstadoSolicitudCompeticionTPage } from './e-estado-solicitud-competicion-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EEstadoSolicitudCompeticionTPageRoutingModule
  ],
  declarations: [EEstadoSolicitudCompeticionTPage]
})
export class EEstadoSolicitudCompeticionTPageModule {}
