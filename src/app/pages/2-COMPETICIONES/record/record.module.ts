import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordPageRoutingModule } from './record-routing.module';

import { RecordPage } from './record.page';
import { TodosRecordComponent } from './todos-record/todos-record.component';
import { FavRecordComponent } from './fav-record/fav-record.component';
import { DatosRegistradoRecordComponent } from './datos-registrado-record/datos-registrado-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordPageRoutingModule
  ],
  declarations: [
    RecordPage,
    TodosRecordComponent,
    FavRecordComponent,
    DatosRegistradoRecordComponent
  ]
})
export class RecordPageModule {}
