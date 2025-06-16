import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ELcp2Page } from './e-lcp-2.page';

const routes: Routes = [
  {
    path: '',
    component: ELcp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELcp2PageRoutingModule {}
