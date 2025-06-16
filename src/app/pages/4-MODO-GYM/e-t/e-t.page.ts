import { Component, OnInit,  } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-e-t',
  templateUrl: './e-t.page.html',
  styleUrls: ['./e-t.page.scss'],
})
export class ETPage implements OnInit {
    // boton flotante
  isMenuOpen = false;  // Controla el estado del menú
    // boton de guardar peso
  registroPesoLpForm: FormGroup;



  constructor() { }

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
