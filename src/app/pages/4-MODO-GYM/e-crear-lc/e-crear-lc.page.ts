import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-crear-lc',
  templateUrl: './e-crear-lc.page.html',
  styleUrls: ['./e-crear-lc.page.scss'],
})
export class ECrearLcPage  {

  public ligasCorporal = {
    nombre: '',
    objetivo: '',
    dia: '',
    participar: ''
  };

  public opcionesObjetivo = ['Bajar de peso', 'Subir de peso'];
  public diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor() {}

  // Función para validar el formulario
  formularioValido() {
    return (
      this.ligasCorporal.nombre.trim().length >= 3 &&
      this.ligasCorporal.objetivo &&
      this.ligasCorporal.dia &&
      this.ligasCorporal.participar
    );
  }

  // Función para manejar la acción al enviar el formulario
  onSubmit() {
    if (this.formularioValido()) {
      // Aquí puedes manejar la lógica del formulario enviado
      console.log('Formulario enviado:', this.ligasCorporal);
    } else {
      console.error('Formulario inválido');
    }
  }

}
