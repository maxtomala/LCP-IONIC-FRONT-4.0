import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESolicitarCompeticionLcpPage } from './e-solicitar-competicion-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: ESolicitarCompeticionLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ESolicitarCompeticionLcpPageRoutingModule {}
