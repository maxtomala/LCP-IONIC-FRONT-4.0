import { NgModule } from '@angular/core';
import {ImagenVerificadorLcPipe } from './imagen-verificador-lc.pipe';
import { ImagenPerfilPipe } from './imagen-perfil.pipe';
import { ImagenGrupalLcPipe } from './imagen-grupal-lc.pipe';
import { ImagenGrupalLcpPipe } from './imagen-grupal-lcp.pipe';
import { ImagenPodioLcPipe } from './imagen-podio-lc.pipe';
import { ImagenPortadaPipe } from './imagen-portada.pipe';

@NgModule({
  declarations: [
    ImagenPerfilPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
    ImagenPodioLcPipe,
    ImagenVerificadorLcPipe,
    ImagenVerificadorLcPipe,
    ImagenPortadaPipe
  ],
  exports: [
    ImagenPerfilPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
    ImagenPodioLcPipe,
    ImagenVerificadorLcPipe,
    ImagenVerificadorLcPipe,
    ImagenPortadaPipe
  ],
})
export class PipesModule {}
