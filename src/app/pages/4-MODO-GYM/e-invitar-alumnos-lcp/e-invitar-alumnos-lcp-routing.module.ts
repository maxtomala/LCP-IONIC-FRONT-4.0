import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EInvitarAlumnosLcpPage } from './e-invitar-alumnos-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EInvitarAlumnosLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EInvitarAlumnosLcpPageRoutingModule {}
