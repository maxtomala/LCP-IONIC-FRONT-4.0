import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESolicitarCompeticionTPage } from './e-solicitar-competicion-t.page';

const routes: Routes = [
  {
    path: '',
    component: ESolicitarCompeticionTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ESolicitarCompeticionTPageRoutingModule {}
