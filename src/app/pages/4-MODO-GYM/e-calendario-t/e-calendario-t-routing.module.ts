import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECalendarioTPage } from './e-calendario-t.page';

const routes: Routes = [
  {
    path: '',
    component: ECalendarioTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECalendarioTPageRoutingModule {}
