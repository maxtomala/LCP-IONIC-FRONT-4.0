import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarImagenFrontalPage } from './eliminar-imagen-frontal.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarImagenFrontalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarImagenFrontalPageRoutingModule {}
