import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERegistrarPesoInicialLcpPage } from './e-registrar-peso-inicial-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: ERegistrarPesoInicialLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ERegistrarPesoInicialLcpPageRoutingModule {}
