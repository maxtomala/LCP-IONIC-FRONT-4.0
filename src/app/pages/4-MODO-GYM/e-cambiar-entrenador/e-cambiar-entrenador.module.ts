import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECambiarEntrenadorPageRoutingModule } from './e-cambiar-entrenador-routing.module';

import { ECambiarEntrenadorPage } from './e-cambiar-entrenador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECambiarEntrenadorPageRoutingModule
  ],
  declarations: [ECambiarEntrenadorPage]
})
export class ECambiarEntrenadorPageModule {}
