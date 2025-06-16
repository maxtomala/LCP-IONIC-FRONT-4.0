import { Component,  } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss'],
})
export class SidebarRightComponent   {

  submenuVisible = false;
  usuario: any;

  constructor(public menuCtrl: MenuController) {}

  logout() {
    throw new Error('Method not implemented.');
  }


  openRightMenu() {
    this.menuCtrl.open('right-menu');
  }


}
