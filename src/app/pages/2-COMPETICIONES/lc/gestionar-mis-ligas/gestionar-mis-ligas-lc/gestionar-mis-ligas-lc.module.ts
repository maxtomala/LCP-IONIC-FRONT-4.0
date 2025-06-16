import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarMisLigasLcPageRoutingModule } from './gestionar-mis-ligas-lc-routing.module';

import { GestionarMisLigasLcPage } from './gestionar-mis-ligas-lc.page';
import { CrearLcComponent } from './crear-lc/crear-lc.component';
import { EditarLcComponent } from './editar-lc/editar-lc.component';
import { EliminarParticipantesLcComponent } from './eliminar-participantes-lc/eliminar-participantes-lc.component';
import { PipesModule } from "../../../../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarMisLigasLcPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
],
  declarations: [
    GestionarMisLigasLcPage,
    CrearLcComponent,
    EditarLcComponent,
    EliminarParticipantesLcComponent]
})
export class GestionarMisLigasLcPageModule {}
