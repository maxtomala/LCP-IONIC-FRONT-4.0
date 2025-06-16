import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trofeos-gimnasio',
  templateUrl: './trofeos-gimnasio.page.html',
  styleUrls: ['./trofeos-gimnasio.page.scss'],
})
export class TrofeosGimnasioPage   {

  constructor() { }
  // boton flotante
  isMenuOpen = false; // Controla el estado del menú

  selectedSegment: string = 'amistoso';

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  verDetalles(id: number) {
    console.log('Ver detalles del trofeo', id);
    // Aquí puedes redirigir a otra página o mostrar un modal con más información
  }

  // boton flotante
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia entre abrir y cerrar el menú
  }

}
