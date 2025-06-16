import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatParticularPageRoutingModule } from './chat-particular-routing.module';

import { ChatParticularPage } from './chat-particular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatParticularPageRoutingModule
  ],
  declarations: [ChatParticularPage]
})
export class ChatParticularPageModule {}
