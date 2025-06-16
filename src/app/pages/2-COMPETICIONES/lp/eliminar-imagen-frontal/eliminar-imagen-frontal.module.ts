import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarImagenFrontalPageRoutingModule } from './eliminar-imagen-frontal-routing.module';

import { EliminarImagenFrontalPage } from './eliminar-imagen-frontal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarImagenFrontalPageRoutingModule
  ],
  declarations: [EliminarImagenFrontalPage]
})
export class EliminarImagenFrontalPageModule {}
