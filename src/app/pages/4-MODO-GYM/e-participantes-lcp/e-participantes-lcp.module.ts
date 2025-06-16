import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EParticipantesLcpPageRoutingModule } from './e-participantes-lcp-routing.module';

import { EParticipantesLcpPage } from './e-participantes-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EParticipantesLcpPageRoutingModule
  ],
  declarations: [EParticipantesLcpPage]
})
export class EParticipantesLcpPageModule {}
