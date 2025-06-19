import { NgModule } from '@angular/core';

import { ImagenPerfilPipe } from './imagen-perfil.pipe';
import { ImagenPodioLcPipe } from './imagen-podio-lc.pipe';
import { ImagenPortadaPipe } from './imagen-portada.pipe';
import { ImagenGrupalLcPipe } from './imagen-grupal-lc.pipe';
import { ImagenGrupalLcpPipe } from './imagen-grupal-lcp.pipe';
import { ImagenVerificadorLcPipe } from './imagen-verificador-lc.pipe';
import { ImagenVerificadorLcpPipe } from './imagen-verificador-lcp.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ImagenPerfilPipe,
    ImagenPodioLcPipe,
    ImagenPortadaPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
    ImagenVerificadorLcPipe,
    ImagenVerificadorLcpPipe,
  ],
  exports: [
    ImagenPerfilPipe,
    ImagenPodioLcPipe,
    ImagenPortadaPipe,
    ImagenGrupalLcPipe,
    ImagenGrupalLcpPipe,
    ImagenVerificadorLcPipe,
    ImagenVerificadorLcpPipe,
  ],
    imports: [
    CommonModule 
  ],
})
export class PipesModule {}
