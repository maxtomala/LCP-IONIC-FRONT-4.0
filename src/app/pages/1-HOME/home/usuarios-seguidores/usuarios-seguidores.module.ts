import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosSeguidoresPageRoutingModule } from './usuarios-seguidores-routing.module';

import { UsuariosSeguidoresPage } from './usuarios-seguidores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosSeguidoresPageRoutingModule
  ],
  declarations: [UsuariosSeguidoresPage]
})
export class UsuariosSeguidoresPageModule {}
