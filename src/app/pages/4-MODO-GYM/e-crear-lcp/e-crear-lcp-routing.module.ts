import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECrearLcpPage } from './e-crear-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: ECrearLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECrearLcpPageRoutingModule {}
