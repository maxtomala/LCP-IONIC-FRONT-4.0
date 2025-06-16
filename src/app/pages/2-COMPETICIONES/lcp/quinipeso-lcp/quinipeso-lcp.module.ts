import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuinipesoLcpPageRoutingModule } from './quinipeso-lcp-routing.module';

import { QuinipesoLcpPage } from './quinipeso-lcp.page';
import { ApuestasLcpComponent } from './apuestas-lcp/apuestas-lcp.component';
import { GanadoresLcpComponent } from './ganadores-lcp/ganadores-lcp.component';
import { PenalizadosLcpComponent } from './penalizados-lcp/penalizados-lcp.component';
import { ReclamarApuestasComponent } from './reclamar-apuestas/reclamar-apuestas.component';
import { UsarCreditoComponent } from './usar-credito/usar-credito.component';
import { ConsultarQuinipesoComponent } from './consultar-quinipeso/consultar-quinipeso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuinipesoLcpPageRoutingModule
  ],
  declarations: [
    QuinipesoLcpPage,
    ApuestasLcpComponent,
    GanadoresLcpComponent,
    PenalizadosLcpComponent,
    ReclamarApuestasComponent,
    UsarCreditoComponent,
    ConsultarQuinipesoComponent


  ]
})
export class QuinipesoLcpPageModule {}
