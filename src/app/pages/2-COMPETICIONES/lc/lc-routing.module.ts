import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LcPage } from './lc.page';

const routes: Routes = [
  {
    path: '',
    component: LcPage
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LcPageRoutingModule {}
