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
import { PodioLcpComponent } from './podio-lcp/podio-lcp.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { TablaClasificatoriaLcpComponent } from './tabla-clasificatoria-lcp/tabla-clasificatoria-lcp.component';
import { GuardarPesoLcpComponent } from './guardar-peso-lcp/guardar-peso-lcp.component';
import { VerificadorSemanalLcpComponent } from './verificador-semanal-lcp/verificador-semanal-lcp.component';
import { CarruselCaracteristicasLcpComponent } from './carrusel-caracteristicas-lcp/carrusel-caracteristicas-lcp.component';
import { MisGruposLcpComponent } from './mis-grupos-lcp/mis-grupos-lcp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LcpPageRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [
    LcpPage,
    GraficoDiarioLcpComponent,
    GraficoAnualLcpComponent,
    GraficoMensualLcpComponent,
    GraficoSemanalLcpComponent,
    PodioLcpComponent,
    TablaClasificatoriaLcpComponent,
    GuardarPesoLcpComponent,
    VerificadorSemanalLcpComponent,
    MisGruposLcpComponent,
    CarruselCaracteristicasLcpComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LcpPageModule {}
