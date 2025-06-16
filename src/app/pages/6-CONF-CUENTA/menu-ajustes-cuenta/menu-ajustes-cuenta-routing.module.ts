import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAjustesCuentaPage } from './menu-ajustes-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAjustesCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAjustesCuentaPageRoutingModule {}
