import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-e-t-2',
  templateUrl: './e-t-2.page.html',
  styleUrls: ['./e-t-2.page.scss'],
})
export class ET2Page  implements OnInit  {

  // boton flotante
  isMenuOpen = false;  // Controla el estado del menú
    // boton de guardar peso
  registroPesoLpForm: FormGroup;


  ngOnInit() {
    console.log()

  }

  ionViewDidEnter() {
  }




  // boton flotante
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;  // Cambia entre abrir y cerrar el menú
  }


// cambiar de torneo
  accionBoton(arg0: string) {
    throw new Error('Method not implemented.');

  }

  guardarPeso() {
    throw new Error('Method not implemented.');
  }




}
