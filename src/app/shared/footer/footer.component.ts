import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent   {

  constructor() {}

  submenu1Visible: boolean = false;
  submenu2Visible: boolean = false;

  toggleSubmenu1() {
    this.submenu1Visible = !this.submenu1Visible;
    this.submenu2Visible = false; // Cerramos el otro submenú si está abierto
  }

  toggleSubmenu2() {
    this.submenu2Visible = !this.submenu2Visible;
    this.submenu1Visible = false; // Cerramos el otro submenú si está abierto
  }


}
