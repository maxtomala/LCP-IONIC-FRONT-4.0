import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ETPage } from './e-t.page';

const routes: Routes = [
  {
    path: '',
    component: ETPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ETPageRoutingModule {}
