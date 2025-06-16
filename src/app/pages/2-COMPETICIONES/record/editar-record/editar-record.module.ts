import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarRecordPageRoutingModule } from './editar-record-routing.module';

import { EditarRecordPage } from './editar-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarRecordPageRoutingModule
  ],
  declarations: [EditarRecordPage]
})
export class EditarRecordPageModule {}
