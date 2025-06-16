import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECalendarioLcpPage } from './e-calendario-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: ECalendarioLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECalendarioLcpPageRoutingModule {}
