import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionLpPage } from './configuracion-lp.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionLpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionLpPageRoutingModule {}
