import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EQuinielaUsarCreditosLcpPageRoutingModule } from './e-quiniela-usar-creditos-lcp-routing.module';

import { EQuinielaUsarCreditosLcpPage } from './e-quiniela-usar-creditos-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EQuinielaUsarCreditosLcpPageRoutingModule
  ],
  declarations: [EQuinielaUsarCreditosLcpPage]
})
export class EQuinielaUsarCreditosLcpPageModule {}
