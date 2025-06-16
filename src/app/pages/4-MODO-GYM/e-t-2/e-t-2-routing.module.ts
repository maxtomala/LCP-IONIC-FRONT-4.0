import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ET2Page } from './e-t-2.page';

const routes: Routes = [
  {
    path: '',
    component: ET2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ET2PageRoutingModule {}
