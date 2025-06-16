import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrofeosUsuarioPage } from './trofeos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: TrofeosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrofeosUsuarioPageRoutingModule {}
