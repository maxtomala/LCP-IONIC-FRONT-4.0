import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConfiguracionPage } from './menu-configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConfiguracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConfiguracionPageRoutingModule {}
