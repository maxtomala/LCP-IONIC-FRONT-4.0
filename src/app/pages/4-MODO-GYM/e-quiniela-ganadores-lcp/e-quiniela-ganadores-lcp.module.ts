import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EQuinielaGanadoresLcpPageRoutingModule } from './e-quiniela-ganadores-lcp-routing.module';

import { EQuinielaGanadoresLcpPage } from './e-quiniela-ganadores-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EQuinielaGanadoresLcpPageRoutingModule
  ],
  declarations: [EQuinielaGanadoresLcpPage]
})
export class EQuinielaGanadoresLcpPageModule {}
