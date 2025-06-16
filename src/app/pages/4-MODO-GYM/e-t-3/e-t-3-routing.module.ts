import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ET3Page } from './e-t-3.page';

const routes: Routes = [
  {
    path: '',
    component: ET3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ET3PageRoutingModule {}
