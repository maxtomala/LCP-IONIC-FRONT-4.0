import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilFormularioPage } from './perfil-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilFormularioPageRoutingModule {}
