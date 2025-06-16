import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarMisLigasLcpPage } from './gestionar-mis-ligas-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarMisLigasLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarMisLigasLcpPageRoutingModule {}
