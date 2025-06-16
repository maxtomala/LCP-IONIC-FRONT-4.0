import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrofeosGimnasioPage } from './trofeos-gimnasio.page';

const routes: Routes = [
  {
    path: '',
    component: TrofeosGimnasioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrofeosGimnasioPageRoutingModule {}
