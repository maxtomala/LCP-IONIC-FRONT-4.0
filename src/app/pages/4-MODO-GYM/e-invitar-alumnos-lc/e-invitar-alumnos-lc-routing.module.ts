import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EInvitarAlumnosLcPage } from './e-invitar-alumnos-lc.page';

const routes: Routes = [
  {
    path: '',
    component: EInvitarAlumnosLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EInvitarAlumnosLcPageRoutingModule {}
