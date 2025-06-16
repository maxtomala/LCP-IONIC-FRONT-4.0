import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAjustesCuentaPageRoutingModule } from './menu-ajustes-cuenta-routing.module';

import { MenuAjustesCuentaPage } from './menu-ajustes-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAjustesCuentaPageRoutingModule
  ],
  declarations: [MenuAjustesCuentaPage]
})
export class MenuAjustesCuentaPageModule {}
