import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirmeLcpPage } from './unirme-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: UnirmeLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirmeLcpPageRoutingModule {}
