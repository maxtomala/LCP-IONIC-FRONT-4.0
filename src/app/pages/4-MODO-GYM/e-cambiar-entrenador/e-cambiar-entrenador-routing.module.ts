import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECambiarEntrenadorPage } from './e-cambiar-entrenador.page';

const routes: Routes = [
  {
    path: '',
    component: ECambiarEntrenadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECambiarEntrenadorPageRoutingModule {}
