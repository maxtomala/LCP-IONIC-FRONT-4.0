import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioInicialPage } from './formulario-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioInicialPageRoutingModule {}
