import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-t-3',
  templateUrl: './e-t-3.page.html',
  styleUrls: ['./e-t-3.page.scss'],
})
export class ET3Page implements OnInit {
    // boton flotante
    isMenuOpen = false; // Controla el estado del menú



  constructor() { }

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
