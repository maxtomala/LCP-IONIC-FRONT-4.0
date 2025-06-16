import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatParticularPage } from './chat-particular.page';

const routes: Routes = [
  {
    path: '',
    component: ChatParticularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatParticularPageRoutingModule {}
