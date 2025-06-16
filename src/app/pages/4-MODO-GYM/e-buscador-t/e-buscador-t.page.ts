import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-buscador-t',
  templateUrl: './e-buscador-t.page.html',
  styleUrls: ['./e-buscador-t.page.scss'],
})
export class EBuscadorTPage  {




  constructor() { }


  nombre: string;
  objetivo: string;
  pais: string;
  genero: string;
  tamano: string;

  public opcionObjetivo = ['Bajar de peso', 'Subir de peso'];
  public opcionGenero = ['Masculino', 'Femenino', 'Mixto'];
  public paisesUnionEuropeaEEUU = [
    'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita',
    'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bahréin', 'Bangladesh',
    'Barbados', 'Belarús (Bielorrusia)', 'Bélgica', 'Belice', 'Benín', 'Bután', 'Bolivia', 'Bosnia y Herzegovina',
    // Otros países
  ];
  public grupo = ['Abierto', 'Cerrado'];



  limpiarFiltros() {
    throw new Error('Method not implemented.');
    }
    buscar() {

    }
}
