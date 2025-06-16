import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  constructor(
    public navCtrl: NavController,
  ) {}
  ngOnInit() {
  }

  volver() {
    this.navCtrl.back();
  }

ejercicios = [
  {
    nombre: 'Press de banca',
    icono: 'barbell',  // icono Ionicons válido, puedes cambiar
    primerLugar: 120,
    rep1: 6,
    series1: 4,
    segundoLugar: 110,
    rep2: 5,
    series2: 4,
    tercerLugar: 100,
    rep3: 6,
    series3: 3,
    ultimoRegistro: {
      kg: 115,
      reps: 6,
      series: 4,
      fecha: new Date('2025-06-01'),
      hora: '18:30'
    }
  },
  {
    nombre: 'Sentadillas',
    icono: 'fitness',
    primerLugar: 150,
    rep1: 5,
    series1: 5,
    segundoLugar: 140,
    rep2: 6,
    series2: 4,
    tercerLugar: 130,
    rep3: 5,
    series3: 3,
    ultimoRegistro: {
      kg: 145,
      reps: 5,
      series: 5,
      fecha: new Date('2025-06-02'),
      hora: '19:00'
    }
  }
];

// submenu de navegacion
  segmentValue = 'todos-record'; // valor por defecto
   segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

}
