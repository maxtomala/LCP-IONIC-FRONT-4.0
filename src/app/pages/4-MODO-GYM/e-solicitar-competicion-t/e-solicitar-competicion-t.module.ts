import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESolicitarCompeticionTPageRoutingModule } from './e-solicitar-competicion-t-routing.module';

import { ESolicitarCompeticionTPage } from './e-solicitar-competicion-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESolicitarCompeticionTPageRoutingModule,
    ReactiveFormsModule // Asegúrate de agregarlo aquí

  ],
  declarations: [ESolicitarCompeticionTPage]
})
export class ESolicitarCompeticionTPageModule {}
