import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCompeticionPageRoutingModule } from './menu-competicion-routing.module';

import { MenuCompeticionPage } from './menu-competicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCompeticionPageRoutingModule
  ],
  declarations: [MenuCompeticionPage]
})
export class MenuCompeticionPageModule {}
