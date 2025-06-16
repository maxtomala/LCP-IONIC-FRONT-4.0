import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECalendarioLcpPageRoutingModule } from './e-calendario-lcp-routing.module';

import { ECalendarioLcpPage } from './e-calendario-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECalendarioLcpPageRoutingModule
  ],
  declarations: [ECalendarioLcpPage]
})
export class ECalendarioLcpPageModule {}
