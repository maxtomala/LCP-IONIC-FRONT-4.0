import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECrearTPage } from './e-crear-t.page';

const routes: Routes = [
  {
    path: '',
    component: ECrearTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECrearTPageRoutingModule {}
