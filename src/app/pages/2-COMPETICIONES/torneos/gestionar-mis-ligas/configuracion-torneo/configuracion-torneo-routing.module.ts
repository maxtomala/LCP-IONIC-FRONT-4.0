import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionTorneoPage } from './configuracion-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionTorneoPageRoutingModule {}
