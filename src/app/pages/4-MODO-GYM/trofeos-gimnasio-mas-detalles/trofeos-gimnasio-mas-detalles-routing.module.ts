import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrofeosGimnasioMasDetallesPage } from './trofeos-gimnasio-mas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: TrofeosGimnasioMasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrofeosGimnasioMasDetallesPageRoutingModule {}
