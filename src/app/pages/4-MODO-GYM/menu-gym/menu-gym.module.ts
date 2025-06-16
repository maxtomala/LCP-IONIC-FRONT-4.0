import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuGymPageRoutingModule } from './menu-gym-routing.module';

import { MenuGymPage } from './menu-gym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuGymPageRoutingModule
  ],
  declarations: [MenuGymPage]
})
export class MenuGymPageModule {}
