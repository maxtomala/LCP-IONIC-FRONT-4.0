import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LcPageRoutingModule } from './lc-routing.module';

import { LcPage } from './lc.page';
import { GraficoDiarioLcComponent } from './graficos/grafico-diario-lc/grafico-diario-lc.component';
import { GraficoAnualLcComponent } from './graficos/grafico-anual-lc/grafico-anual-lc.component';
import { GraficoMensualLcComponent } from './graficos/grafico-mensual-lc/grafico-mensual-lc.component';
import { GraficoSemanalLcComponent } from './graficos/grafico-semanal-lc/grafico-semanal-lc.component';
import { GuardarPesoLcComponent } from './guardar-peso-lc/guardar-peso-lc.component';
import { MisGruposLcComponent } from './mis-grupos-lc/mis-grupos-lc.component';
import { TablaClasificatoriaLcComponent } from './tabla-clasificatoria-lc/tabla-clasificatoria-lc.component';
import { PodioLcComponent } from './podio-lc/podio-lc.component';
import { VerificadorSemanalLcComponent } from './verificador-semanal-lc/verificador-semanal-lc.component';
import { CarruselCaracteristicasLcComponent } from './carrusel-caracteristicas-lc/carrusel-caracteristicas-lc.component';
import { PipesModule } from "../../../pipes/pipes.module";
import { TablaRegistroInicialLcpComponent } from '../lcp/tabla-registro-inicial-lcp/tabla-registro-inicial-lcp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LcPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
],
  declarations: [
    LcPage,
    GraficoDiarioLcComponent,
    GraficoAnualLcComponent,
    GraficoMensualLcComponent,
    GraficoSemanalLcComponent,
    MisGruposLcComponent,
    GuardarPesoLcComponent,
    CarruselCaracteristicasLcComponent,
    VerificadorSemanalLcComponent,
    PodioLcComponent,
    TablaClasificatoriaLcComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LcPageModule {}
