import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarMisLigasLcpPageRoutingModule } from './gestionar-mis-ligas-lcp-routing.module';

import { GestionarMisLigasLcpPage } from './gestionar-mis-ligas-lcp.page';
import { CrearLcpComponent } from './crear-lcp/crear-lcp.component';
import { EditarLcpComponent } from './editar-lcp/editar-lcp.component';
import { EliminarParticipantesLcpComponent } from './eliminar-participantes-lcp/eliminar-participantes-lcp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarMisLigasLcpPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GestionarMisLigasLcpPage,
    CrearLcpComponent,
    EditarLcpComponent,
    EliminarParticipantesLcpComponent,
  ],
})
export class GestionarMisLigasLcpPageModule {}
