import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioLcpPageRoutingModule } from './calendario-lcp-routing.module';

import { CalendarioLcpPage } from './calendario-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioLcpPageRoutingModule
  ],
  declarations: [CalendarioLcpPage]
})
export class CalendarioLcpPageModule {}
