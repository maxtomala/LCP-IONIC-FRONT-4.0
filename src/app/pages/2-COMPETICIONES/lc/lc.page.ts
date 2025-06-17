import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonSegmentCustomEvent, SegmentChangeEventDetail } from '@ionic/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';

@Component({
  selector: 'app-lc',
  templateUrl: './lc.page.html',
  styleUrls: ['./lc.page.scss'],
})
export class LcPage implements OnInit {
  public ligaSeleccionada: LigaCorporal | null = null;

  constructor(
    public navCtrl: NavController,
    public router: Router //para btn flotante y navergar
  ) {}

  ngOnInit(): void {
    // grafica
    // Lógica para cambio automático a 'semanal' después de 3 segundos (3000 ms)
    setTimeout(() => {
      this.tipoGrafica = 'diario';
      // Simula el evento ionChange para que se ejecute la lógica de cambio
      this.segmentChanged({
        detail: { value: 'diario' },
      } as IonSegmentCustomEvent<SegmentChangeEventDetail>);
    }, 2000);
  }

  volver() {
    this.navCtrl.back();
  }

  // grafica lineal: sale por defecto,
  tipoGrafica: string = 'semanal';

  // metodo para cambiar  el grafico de  semanal a diario, q haga una recarga para ver el grafico
  segmentChanged(event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    // this.tipoGrafica = String(event.detail.value);
    this.tipoGrafica = event.detail.value as string;
  }
}
