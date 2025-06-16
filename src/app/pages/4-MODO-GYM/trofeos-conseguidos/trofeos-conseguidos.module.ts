import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrofeosConseguidosPageRoutingModule } from './trofeos-conseguidos-routing.module';

import { TrofeosConseguidosPage } from './trofeos-conseguidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrofeosConseguidosPageRoutingModule
  ],
  declarations: [TrofeosConseguidosPage]
})
export class TrofeosConseguidosPageModule {}
