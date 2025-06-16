import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LcpPage } from './lcp.page';

const routes: Routes = [
  {
    path: '',
    component: LcpPage
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LcpPageRoutingModule {}
