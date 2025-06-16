import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EConsultarTorneosPage } from './e-consultar-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: EConsultarTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EConsultarTorneosPageRoutingModule {}
