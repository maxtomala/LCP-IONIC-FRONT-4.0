import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuGestionarMisLigasPageRoutingModule } from './menu-gestionar-mis-ligas-routing.module';

import { MenuGestionarMisLigasPage } from './menu-gestionar-mis-ligas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuGestionarMisLigasPageRoutingModule
  ],
  declarations: [MenuGestionarMisLigasPage]
})
export class MenuGestionarMisLigasPageModule {}
