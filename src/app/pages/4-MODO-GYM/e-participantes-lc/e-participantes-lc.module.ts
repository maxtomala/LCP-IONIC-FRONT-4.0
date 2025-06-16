import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EParticipantesLcPageRoutingModule } from './e-participantes-lc-routing.module';

import { EParticipantesLcPage } from './e-participantes-lc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EParticipantesLcPageRoutingModule
  ],
  declarations: [EParticipantesLcPage]
})
export class EParticipantesLcPageModule {}
