import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e-quiniela-lcp',
  templateUrl: './e-quiniela-lcp.page.html',
  styleUrls: ['./e-quiniela-lcp.page.scss'],
})
export class EQuinielaLcpPage implements OnInit {
usarCreditos() {
throw new Error('Method not implemented.');
}
jornadaActualReclamarCreditos: any;
jornadas: any;
reclamarQuinielasPorCreditos() {
throw new Error('Method not implemented.');
}
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}

plantillas: any[] = []; // Aquí se almacenan las plantillas de quiniela
jornadaActual: number = 1; // Número de la jornada actual
registroPesoLpForm: FormGroup; // Formulario para guardar el peso

constructor(private fb: FormBuilder) {
  // Inicializar el formulario (si es necesario)
  this.registroPesoLpForm = this.fb.group({
    peso: [''],
  });
}

ngOnInit() {
  this.cargarPlantillas(); // Cargar las plantillas al iniciar el componente
}

// Método para cargar las plantillas de quiniela
cargarPlantillas() {
  // Aquí puedes realizar una llamada a un servicio para obtener los datos
  // Por ejemplo: this.plantillas = await this.quinielaService.getPlantillas();

  // Ejemplo de datos mock
  this.plantillas = [
    {
      emparejamiento: {
        id: 1,
        participantes: [
          { nombre: 'Juan antonio', img: 'assets/perfil/2.jpg' },
          { nombre: 'Lucia Barraca', img: 'assets/perfil/7.jpg' },

        ],
        fechaInicio: new Date(), // Fecha actual como ejemplo
        fechaFinal: new Date(new Date().setDate(new Date().getDate() + 7)), // Una semana después
      },
      resultado: null, // Resultado por defecto

    },
    // Puedes agregar más emparejamientos
    {
      emparejamiento: {
        id: 1,
        participantes: [
          { nombre: 'Juan antonio', img: 'assets/perfil/d5.jpg' },
          { nombre: 'Lucia Barraca2', img: 'assets/perfil/d6.png' },

        ],
        fechaInicio: new Date(), // Fecha actual como ejemplo
        fechaFinal: new Date(new Date().setDate(new Date().getDate() + 7)), // Una semana después
      },
      resultado: null, // Resultado por defecto

    },
  ];
}

// Método para cambiar de jornada
cambiarJornada(jornada: number) {
  // Asegúrate de que el número de jornada esté dentro de los límites
  if (jornada > 0 && jornada <= this.plantillas.length) {
    this.jornadaActual = jornada;
    this.cargarPlantillas(); // Puedes cargar las plantillas específicas para la nueva jornada
  }
}

// Método para guardar los resultados de la quiniela
guardarResultados() {
  // Aquí se podría enviar los resultados a un servicio
  console.log('Resultados guardados:', this.plantillas);
  // Ejemplo: this.quinielaService.guardarResultados(this.plantillas);
}
}
