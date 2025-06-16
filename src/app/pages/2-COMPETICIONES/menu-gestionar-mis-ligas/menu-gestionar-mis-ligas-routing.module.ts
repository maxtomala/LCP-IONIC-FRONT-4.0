import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuGestionarMisLigasPage } from './menu-gestionar-mis-ligas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuGestionarMisLigasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGestionarMisLigasPageRoutingModule {}
