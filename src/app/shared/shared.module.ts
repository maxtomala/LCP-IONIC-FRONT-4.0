import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import {  RouterModule } from '@angular/router';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
RouterModule.forChild([]),
    PipesModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarLeftComponent,
    SidebarRightComponent,

  ],
})
export class SharedModule {}
