import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrofeosGimnasioMasDetallesPageRoutingModule } from './trofeos-gimnasio-mas-detalles-routing.module';

import { TrofeosGimnasioMasDetallesPage } from './trofeos-gimnasio-mas-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrofeosGimnasioMasDetallesPageRoutingModule
  ],
  declarations: [TrofeosGimnasioMasDetallesPage]
})
export class TrofeosGimnasioMasDetallesPageModule {}
