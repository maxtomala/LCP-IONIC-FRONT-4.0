import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantesLcPageRoutingModule } from './participantes-lc-routing.module';

import { ParticipantesLcPage } from './participantes-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesLcPageRoutingModule
  ],
  declarations: [ParticipantesLcPage]
})
export class ParticipantesLcPageModule {}
