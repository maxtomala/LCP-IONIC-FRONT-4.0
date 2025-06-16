import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { Imagen2Pipe } from './imagen2.pipe';
import { Imagen3Pipe } from './imagen3.pipe';
import { Imagen4Pipe } from './imagen4.pipe';
import { ImagenPerfilPipe } from './imagen-perfil.pipe';
import { ImagenGrupalLcPipe } from './imagen-grupal-lc.pipe';
import { ImagenGrupalLcpPipe } from './imagen-grupal-lcp.pipe';

@NgModule({
  declarations: [
    ImagenPipe,
    Imagen2Pipe,
    Imagen3Pipe,
    Imagen4Pipe,
    ImagenPerfilPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
  ],
  exports: [
    ImagenPipe,
    Imagen2Pipe,
    Imagen3Pipe,
    Imagen4Pipe,
    ImagenPerfilPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
  ],
})
export class PipesModule {}
