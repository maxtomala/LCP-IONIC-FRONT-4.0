import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatGeneralPageRoutingModule } from './chat-general-routing.module';

import { ChatGeneralPage } from './chat-general.page';
import { TodosComponent } from './todos/todos.component';
import { NoLeidosComponent } from './no-leidos/no-leidos.component';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatGeneralPageRoutingModule
  ],
  declarations: [
  ChatGeneralPage,
  TodosComponent,
  NoLeidosComponent,
  GruposComponent
  ]



})
export class ChatGeneralPageModule {}
