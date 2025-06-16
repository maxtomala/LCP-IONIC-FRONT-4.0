import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECrearLcPage } from './e-crear-lc.page';

const routes: Routes = [
  {
    path: '',
    component: ECrearLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECrearLcPageRoutingModule {}
