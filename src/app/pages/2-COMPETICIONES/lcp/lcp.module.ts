import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LcpPageRoutingModule } from './lcp-routing.module';

import { LcpPage } from './lcp.page';
import { GraficoDiarioLcpComponent } from './graficos/grafico-diario-lcp/grafico-diario-lcp.component';
import { GraficoAnualLcpComponent } from './graficos/grafico-anual-lcp/grafico-anual-lcp.component';
import { GraficoMensualLcpComponent } from './graficos/grafico-mensual-lcp/grafico-mensual-lcp.component';
import { GraficoSemanalLcpComponent } from './graficos/grafico-semanal-lcp/grafico-semanal-lcp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LcpPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [
    LcpPage,
    GraficoDiarioLcpComponent,
    GraficoAnualLcpComponent,
    GraficoMensualLcpComponent,
    GraficoSemanalLcpComponent

  ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class LcpPageModule {}
