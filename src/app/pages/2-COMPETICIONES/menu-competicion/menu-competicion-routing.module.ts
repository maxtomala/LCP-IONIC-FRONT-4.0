import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCompeticionPage } from './menu-competicion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCompeticionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCompeticionPageRoutingModule {}
