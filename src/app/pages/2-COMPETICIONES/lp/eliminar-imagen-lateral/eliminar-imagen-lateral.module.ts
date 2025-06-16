import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarImagenLateralPageRoutingModule } from './eliminar-imagen-lateral-routing.module';

import { EliminarImagenLateralPage } from './eliminar-imagen-lateral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarImagenLateralPageRoutingModule
  ],
  declarations: [EliminarImagenLateralPage]
})
export class EliminarImagenLateralPageModule {}
