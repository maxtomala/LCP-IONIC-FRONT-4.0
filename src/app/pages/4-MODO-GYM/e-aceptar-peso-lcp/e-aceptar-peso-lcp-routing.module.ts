import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EAceptarPesoLcpPage } from './e-aceptar-peso-lcp.page';

const routes: Routes = [
  {
    path: '',
    component: EAceptarPesoLcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EAceptarPesoLcpPageRoutingModule {}
