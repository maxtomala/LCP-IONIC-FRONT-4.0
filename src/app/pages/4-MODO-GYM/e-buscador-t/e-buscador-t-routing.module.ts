import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBuscadorTPage } from './e-buscador-t.page';

const routes: Routes = [
  {
    path: '',
    component: EBuscadorTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBuscadorTPageRoutingModule {}
