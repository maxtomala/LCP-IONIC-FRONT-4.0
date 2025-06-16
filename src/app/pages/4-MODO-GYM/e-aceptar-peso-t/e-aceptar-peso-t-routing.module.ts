import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EAceptarPesoTPage } from './e-aceptar-peso-t.page';

const routes: Routes = [
  {
    path: '',
    component: EAceptarPesoTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EAceptarPesoTPageRoutingModule {}
