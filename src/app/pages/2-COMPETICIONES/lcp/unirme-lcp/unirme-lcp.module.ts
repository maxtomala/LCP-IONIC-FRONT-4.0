import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirmeLcpPageRoutingModule } from './unirme-lcp-routing.module';

import { UnirmeLcpPage } from './unirme-lcp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirmeLcpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnirmeLcpPage]
})
export class UnirmeLcpPageModule {}
