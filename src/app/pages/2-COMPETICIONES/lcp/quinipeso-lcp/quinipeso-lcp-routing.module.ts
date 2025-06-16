import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuinipesoLcpPage } from './quinipeso-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: QuinipesoLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuinipesoLcpPageRoutingModule {}
