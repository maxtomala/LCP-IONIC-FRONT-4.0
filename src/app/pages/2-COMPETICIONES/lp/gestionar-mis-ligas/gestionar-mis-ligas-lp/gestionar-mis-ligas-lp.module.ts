import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarMisLigasLpPageRoutingModule } from './gestionar-mis-ligas-lp-routing.module';

import { GestionarMisLigasLpPage } from './gestionar-mis-ligas-lp.page';
import { MisRegistrosComponent } from './mis-registros/mis-registros.component';
import { EditarPesoLpComponent } from './editar-peso-lp/editar-peso-lp.component';
import { PipesModule } from "../../../../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarMisLigasLpPageRoutingModule,
    PipesModule
],
  declarations: [
    GestionarMisLigasLpPage,
    MisRegistrosComponent,
    EditarPesoLpComponent
  ]
})
export class GestionarMisLigasLpPageModule {}
