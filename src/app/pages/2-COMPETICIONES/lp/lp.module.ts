import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LpPageRoutingModule } from './lp-routing.module';

import { LpPage } from './lp.page';
import { GraficaDonutComponent } from './graficos/grafica-donut/grafica-donut.component';
import { GraficoDiarioLpComponent } from './graficos/grafico-diario-lp/grafico-diario-lp.component';
import { GraficoAnualLpComponent } from './graficos/grafico-anual-lp/grafico-anual-lp.component';
import { GraficoMensualLpComponent } from './graficos/grafico-mensual-lp/grafico-mensual-lp.component';
import { GraficoSemanalLpComponent } from './graficos/grafico-semanal-lp/grafico-semanal-lp.component';
import { CarruselFrontalLpComponent } from './carrusel-frontal-lp/carrusel-frontal-lp.component';
import { CarruselLateralLpComponent } from './carrusel-lateral-lp/carrusel-lateral-lp.component';
import { PipesModule } from "../../../pipes/pipes.module";
import { GuardarPesoLpComponent } from './guardar-peso-lp/guardar-peso-lp.component';
import { PerfilSaludComponent } from './perfil-salud/perfil-salud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LpPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
],
  declarations: [LpPage,
        GraficaDonutComponent,
        GraficoDiarioLpComponent,
        GraficoAnualLpComponent,
        GraficoMensualLpComponent,
        GraficoSemanalLpComponent,
        CarruselFrontalLpComponent,
        CarruselLateralLpComponent,
        GuardarPesoLpComponent,
        PerfilSaludComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class LpPageModule {}
