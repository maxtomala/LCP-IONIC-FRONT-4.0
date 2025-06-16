import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ELc2Page } from './e-lc-2.page';

const routes: Routes = [
  {
    path: '',
    component: ELc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELc2PageRoutingModule {}
