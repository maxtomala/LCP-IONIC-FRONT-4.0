import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuConfiguracionPageRoutingModule } from './menu-configuracion-routing.module';

import { MenuConfiguracionPage } from './menu-configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConfiguracionPageRoutingModule
  ],
  declarations: [MenuConfiguracionPage]
})
export class MenuConfiguracionPageModule {}
