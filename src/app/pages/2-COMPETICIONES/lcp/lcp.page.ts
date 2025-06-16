import { Component, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController,  } from '@ionic/angular';
import { IonSegmentCustomEvent, SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-lcp',
  templateUrl: './lcp.page.html',
  styleUrls: ['./lcp.page.scss'],
})
export class LcpPage implements OnInit {

  ligaCorporalprofesional = [
    { nombre: 'familia' },
    { nombre: 'gimnasio ' },
    { nombre: 'gimnasio ' },


  ];



registroPesoLpForm: FormGroup;
  botonHabilitado: boolean = true;

  ligaIniciada: boolean = true;

  imagenGrupalLcp: string = 'assets/imagen/equipo.jpg'; // Imagen ejemplo
  tablaClasificatoria: any[] = [
    {
      img: 'avatar1.jpg',
      nombre: 'Juan Pérez',
      puntosTotales: 30,
      partidosGanados: 3,
      partidosPerdidos: 1,
      partidosEmpatados: 2,
      pesoAnterior: 80,
      pesoActual: 78,
      pesoSemanal: '-2kg',
      afectadoPorQuiniela: 'No',
      imgVerificadorLcp: 'verificador1.jpg'
    },
    {
      img: 'avatar2.jpg',
      nombre: 'Ana López',
      puntosTotales: 28,
      partidosGanados: 2,
      partidosPerdidos: 2,
      partidosEmpatados: 2,
      pesoAnterior: 65,
      pesoActual: 64,
      pesoSemanal: '-1kg',
      afectadoPorQuiniela: 'Sí',
      imgVerificadorLcp: 'verificador2.jpg'
    }
    // Agrega más participantes aquí
  ];
usuario: any;


  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public router: Router

  ) {}


  ngOnInit(): void {
    this.registroPesoLpForm = this.formBuilder.group({
      peso: ['', [Validators.required, Validators.min(1)]]
    });

// grafica
  // Lógica para cambio automático a 'semanal' después de 3 segundos (3000 ms)
    setTimeout(() => {
      this.tipoGrafica = 'diario';
      // Simula el evento ionChange para que se ejecute la lógica de cambio
      this.segmentChanged({
        detail: { value: 'diario' }
      } as IonSegmentCustomEvent<SegmentChangeEventDetail>);
    }, 2000);


  }




  guardarPeso() {
      console.log('Peso guardado correctamente (ejemplo).');


    if (this.registroPesoLpForm.valid) {
      const peso = this.registroPesoLpForm.value.peso;
      console.log('Peso registrado:', peso);
    }
  }



  subirImagen(): void {
    console.log('Función para subir imagen llamada');
    // Lógica para abrir modal o input file
  }

  abrirModal(usuario: any): void {
    console.log('Abriendo modal para verificador:', usuario);
    // Aquí puedes abrir un modal o realizar otra acción
  }

  accionBoton(accion: string): void {
    console.log('Acción:', accion);
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
