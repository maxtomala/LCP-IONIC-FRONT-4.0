import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EQuinielaGanadoresLcpPage } from './e-quiniela-ganadores-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EQuinielaGanadoresLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EQuinielaGanadoresLcpPageRoutingModule {}
