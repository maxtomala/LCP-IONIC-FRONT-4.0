import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EEntrenamientosPage } from './e-entrenamientos.page';

const routes: Routes = [
  {
    path: '',
    component: EEntrenamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EEntrenamientosPageRoutingModule {}
