import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EEntrenamientosPageRoutingModule } from './e-entrenamientos-routing.module';

import { EEntrenamientosPage } from './e-entrenamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EEntrenamientosPageRoutingModule
  ],
  declarations: [EEntrenamientosPage]
})
export class EEntrenamientosPageModule {}
