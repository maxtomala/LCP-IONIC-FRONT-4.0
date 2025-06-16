import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ELCPPage } from './e-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: ELCPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELCPPageRoutingModule {}
