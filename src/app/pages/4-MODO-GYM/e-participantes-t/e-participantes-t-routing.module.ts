import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EParticipantesTPage } from './e-participantes-t.page';

const routes: Routes = [
  {
    path: '',
    component: EParticipantesTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EParticipantesTPageRoutingModule {}
