import { Component,  } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage  {

  usuario: any;

  constructor(private menuCtrl: MenuController) {}

  logout() {
    throw new Error('Method not implemented.');
  }

  openSidebarLeft() {
    this.menuCtrl.open('left-menu');
  }


  openRightMenu() {
    this.menuCtrl.open('right-menu');
  }


}
