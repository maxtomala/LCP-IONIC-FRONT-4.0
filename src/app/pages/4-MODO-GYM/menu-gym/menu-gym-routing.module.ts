import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuGymPage } from './menu-gym.page';

const routes: Routes = [
  {
    path: '',
    component: MenuGymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGymPageRoutingModule {}
