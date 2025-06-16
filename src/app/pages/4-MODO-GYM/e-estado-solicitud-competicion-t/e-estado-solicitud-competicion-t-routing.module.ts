import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EEstadoSolicitudCompeticionTPage } from './e-estado-solicitud-competicion-t.page';

const routes: Routes = [
  {
    path: '',
    component: EEstadoSolicitudCompeticionTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EEstadoSolicitudCompeticionTPageRoutingModule {}
