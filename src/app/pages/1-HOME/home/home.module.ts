import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { FavComponent } from './fav/fav.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { SiguiendoComponent } from './siguiendo/siguiendo.component';
import { PublicarContenidoComponent } from './publicar-contenido/publicar-contenido.component';
import { PipesModule } from "../../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PipesModule
],
  declarations: [
    HomePage,
    MisPublicacionesComponent,
    SiguiendoComponent,
    FavComponent,
    RespuestasComponent,
    PublicarContenidoComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule {}
