import { Component, OnInit } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-e-lcp-3',
  templateUrl: './e-lcp-3.page.html',
  styleUrls: ['./e-lcp-3.page.scss'],
})
export class ELcp3Page implements OnInit {


  // boton flotante
  isMenuOpen = false; // Controla el estado del menú

  constructor() {}
  ngOnInit() {
  }
  // boton flotante
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia entre abrir y cerrar el menú
  }
  accionBoton(arg0: string) {
    throw new Error('Method not implemented.');
    }
}
