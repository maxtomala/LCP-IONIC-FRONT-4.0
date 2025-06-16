import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarRecordPage } from './editar-record.page';

const routes: Routes = [
  {
    path: '',
    component: EditarRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarRecordPageRoutingModule {}
