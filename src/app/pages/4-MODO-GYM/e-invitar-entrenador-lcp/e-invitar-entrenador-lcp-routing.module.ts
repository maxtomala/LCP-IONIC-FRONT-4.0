import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EInvitarEntrenadorLcpPage } from './e-invitar-entrenador-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EInvitarEntrenadorLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EInvitarEntrenadorLcpPageRoutingModule {}
