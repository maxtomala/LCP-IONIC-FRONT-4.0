import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarMisLigasLpPage } from './gestionar-mis-ligas-lp.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarMisLigasLpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarMisLigasLpPageRoutingModule {}
