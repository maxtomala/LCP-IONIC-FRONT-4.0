import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EEstadoSolicitudCompeticionLcpPage } from './e-estado-solicitud-competicion-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EEstadoSolicitudCompeticionLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EEstadoSolicitudCompeticionLcpPageRoutingModule {}
