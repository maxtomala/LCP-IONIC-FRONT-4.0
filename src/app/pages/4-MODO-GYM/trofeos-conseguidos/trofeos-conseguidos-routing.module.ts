import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrofeosConseguidosPage } from './trofeos-conseguidos.page';

const routes: Routes = [
  {
    path: '',
    component: TrofeosConseguidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrofeosConseguidosPageRoutingModule {}
