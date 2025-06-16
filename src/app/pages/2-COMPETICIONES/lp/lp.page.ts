import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PerfilSaludComponent } from './perfil-salud/perfil-salud.component';
import { GraficaDonutComponent } from './graficos/grafica-donut/grafica-donut.component';
import { GraficoDiarioLpComponent } from './graficos/grafico-diario-lp/grafico-diario-lp.component';

@Component({
  selector: 'app-lp',
  templateUrl: './lp.page.html',
  styleUrls: ['./lp.page.scss'],
})
export class LpPage implements OnInit {

@ViewChild('perfilSalud') perfilSalud!: PerfilSaludComponent; // Tener una referencia directa al componente hijo y Acceder a ese componente desde el TypeScript @ViewChild('perfilSalud').
@ViewChild('graficaDonut') graficaDonut!: GraficaDonutComponent;
@ViewChild('graficoDiario') graficoDiario!: GraficoDiarioLpComponent;

  // ocultar carrusel
  mostrarCarruselFrontal: boolean = true;
  mostrarCarruselLateral: boolean = true;

  public usuario: Usuario;

  constructor(
    public navCtrl: NavController,
    public router: Router,
    private usuarioService: UsuarioService
  ) {}

  volver() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    // Lógica para cambio automático a 'semanal' después de 3 segundos (3000 ms)
    setTimeout(() => {
      this.tipoGrafica = 'diario';
      // Simula el evento ionChange para que se ejecute la lógica de cambio
      this.segmentChanged({
        detail: { value: 'diario' },
      } as IonSegmentCustomEvent<SegmentChangeEventDetail>);
    }, 2000);

    // ocultar carrusel
    this.mostrarCarruselFrontal =
      localStorage.getItem('mostrarCarruselFrontal') !== 'false';
    this.mostrarCarruselLateral =
      localStorage.getItem('mostrarCarruselLateral') !== 'false';
  }

  // grafica lineal: sale por defecto,
  tipoGrafica: string = 'semanal';
  // metodo para cambiar  el grafico de  semanal a diario, q haga una recarga para ver el grafico
  segmentChanged(event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    // this.tipoGrafica = String(event.detail.value);
    this.tipoGrafica = event.detail.value as string;
  }

  refrescarComponentes() {
    this.perfilSalud.ultimoPesoRegistrado();
    this.graficaDonut.ultimoPesoRegistrado(); // crea este método si no lo tienes
    this.graficoDiario.obtenerTodosLosPesos(); // idem
  }





  // <app-guardar-peso-lp (pesoGuardado)="refrescarComponentes()"></app-guardar-peso-lp>
  //Cuando el componente hijo emite el evento pesoGuardado, se ejecuta la función refrescarComponentes() del padre.




}



