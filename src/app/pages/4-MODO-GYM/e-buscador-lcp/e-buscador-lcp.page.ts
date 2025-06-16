import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-buscador-lcp',
  templateUrl: './e-buscador-lcp.page.html',
  styleUrls: ['./e-buscador-lcp.page.scss'],
})
export class EBuscadorLcpPage   {
quiniela: any;
genero: any;
nombre: any;
objetivo: any;
pais: any;
tipo: any;
ciudad: any;

  constructor() { }



  public opcionObjetivo = ['Bajar de peso', 'Subir de peso'];
  public opcionGenero = ['Masculino', 'Femenino', 'Mixto'];
  public opcionQuiniela = ['Activar', 'Desactivar'];
  public tipoEnfrentamiento = ['Solo de ida', 'Ida y vuelta'];
  public grupo = ['Abierto', 'Cerrado'];

  public paisesUnionEuropeaEEUU = [
    'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita',
    'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bahréin', 'Bangladesh',
    'Barbados', 'Belarús (Bielorrusia)', 'Bélgica', 'Belice', 'Benín', 'Bután', 'Bolivia', 'Bosnia y Herzegovina',
    // Añade todos los países aquí
  ];

  limpiarFiltros() {

  }

  buscar() {

}
}
