import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantesLcPage } from './participantes-lc.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantesLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantesLcPageRoutingModule {}
