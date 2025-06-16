import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EAceptarPesoLcPage } from './e-aceptar-peso-lc.page';

const routes: Routes = [
  {
    path: '',
    component: EAceptarPesoLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EAceptarPesoLcPageRoutingModule {}
