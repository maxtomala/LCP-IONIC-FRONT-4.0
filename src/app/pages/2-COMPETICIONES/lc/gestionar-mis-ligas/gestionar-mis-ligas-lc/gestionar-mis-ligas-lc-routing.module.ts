import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarMisLigasLcPage } from './gestionar-mis-ligas-lc.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarMisLigasLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarMisLigasLcPageRoutingModule {}
