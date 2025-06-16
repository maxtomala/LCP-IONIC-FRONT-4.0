import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrofeosGimnasioPageRoutingModule } from './trofeos-gimnasio-routing.module';

import { TrofeosGimnasioPage } from './trofeos-gimnasio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrofeosGimnasioPageRoutingModule
  ],
  declarations: [TrofeosGimnasioPage]
})
export class TrofeosGimnasioPageModule {}
