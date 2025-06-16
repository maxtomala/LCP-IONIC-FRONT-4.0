import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EQuinielaLcpPage } from './e-quiniela-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EQuinielaLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EQuinielaLcpPageRoutingModule {}
