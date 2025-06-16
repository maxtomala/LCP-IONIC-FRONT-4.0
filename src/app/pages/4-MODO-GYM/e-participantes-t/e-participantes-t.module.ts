import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EParticipantesTPageRoutingModule } from './e-participantes-t-routing.module';

import { EParticipantesTPage } from './e-participantes-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EParticipantesTPageRoutingModule
  ],
  declarations: [EParticipantesTPage]
})
export class EParticipantesTPageModule {}
