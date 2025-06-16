import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ELcp3Page } from './e-lcp-3.page';

const routes: Routes = [
  {
    path: '',
    component: ELcp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELcp3PageRoutingModule {}
