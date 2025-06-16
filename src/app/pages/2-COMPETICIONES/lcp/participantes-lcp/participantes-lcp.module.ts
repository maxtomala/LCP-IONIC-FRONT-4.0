import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantesLcpPageRoutingModule } from './participantes-lcp-routing.module';

import { ParticipantesLcpPage } from './participantes-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesLcpPageRoutingModule
  ],
  declarations: [ParticipantesLcpPage]
})
export class ParticipantesLcpPageModule {}
