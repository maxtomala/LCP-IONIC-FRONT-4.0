import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesCuentaPage } from './ajustes-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesCuentaPageRoutingModule {}
