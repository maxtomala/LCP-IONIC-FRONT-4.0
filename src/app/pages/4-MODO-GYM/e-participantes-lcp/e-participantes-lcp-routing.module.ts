import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EParticipantesLcpPage } from './e-participantes-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EParticipantesLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EParticipantesLcpPageRoutingModule {}
