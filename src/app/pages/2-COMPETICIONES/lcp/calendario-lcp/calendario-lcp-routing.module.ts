import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioLcpPage } from './calendario-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioLcpPageRoutingModule {}
