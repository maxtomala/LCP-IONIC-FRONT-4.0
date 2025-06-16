import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarImagenLateralPage } from './eliminar-imagen-lateral.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarImagenLateralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarImagenLateralPageRoutingModule {}
