import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-record',
  templateUrl: './editar-record.page.html',
  styleUrls: ['./editar-record.page.scss'],
})
export class EditarRecordPage implements OnInit {
guardarLugar(_t100: number,arg1: number) {
throw new Error('Method not implemented.');
}
eliminarLugar(_t100: number,arg1: number) {
throw new Error('Method not implemented.');
}
guardarEjercicio(_t100: number) {
throw new Error('Method not implemented.');
}

  constructor(
        public navCtrl: NavController,

  ) { }
  ngOnInit() {
  }


ejercicio3 = {
  ultimoRegistro: {
    kg: null,
    reps: null,
    series: null,
    fecha: new Date('2025-06-05T16:05:00'),
    hora: '16:05'
  }
};






ejercicios1 = [
  { icono: 'barbell', nombre: 'Banca' },
  { icono: 'body', nombre: 'Sentadilla' },
  { icono: 'walk', nombre: 'Caminata' },
  { icono: 'bicycle', nombre: 'Bicicleta' },
  { icono: 'fitness', nombre: 'Cardio' }
];



  ejercicios = [
    {
      nombre: 'Press de banca',
      icono: 'barbell',
      primerLugar: 100,
      rep1: 5,
      series1: 3,
      segundoLugar: 90,
      rep2: 6,
      series2: 3,
      tercerLugar: 80,
      rep3: 8,
      series3: 3,
      ultimoRegistro: {
        kg: 95,
        reps: 5,
        series: 3,
        fechaHora: new Date()
      }
    },
    // más ejercicios...
  ];

  eliminarEjercicio(index: number) {
    this.ejercicios.splice(index, 1);
  }

  guardarCambios() {
    // Aquí puedes guardar al backend o localStorage
    console.log('Ejercicios actualizados:', this.ejercicios);
  }

    volver() {
    this.navCtrl.back();
  }




guardarRegistro() {
  console.log('Registro guardado:', this.ejercicio3.ultimoRegistro);
  // lógica para guardar
}

eliminarRegistro() {
  console.log('Registro eliminado');
  // lógica para eliminar
}

selectedEjercicio: any = null;

seleccionarEjercicio(ejercicio: any) {
  this.selectedEjercicio = ejercicio;
}


}




