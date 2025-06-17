import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
declare var Morris: any;

@Component({
  selector: 'app-e-lcp',
  templateUrl: './e-lcp.page.html',
  styleUrls: ['./e-lcp.page.scss'],
})
export class ELCPPage implements OnInit, AfterViewInit {
  // boton de guardar peso
  registroPesoLpForm: FormGroup;
  // boton flotante
  isMenuOpen = false; // Controla el estado del menú

  constructor(

  ) {}

  accionBoton(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // es otra solucion para ver la grafica  setTimeout(()
    setTimeout(() => {
      this.createLineChart();
    }, 300); // Espera 300 ms antes de crear el gráfico
  }


  // Gráfica lineal con diferentes usuarios y colores
  createLineChart() {
    const chart = new Morris.Line({
      element: 'lineChart',
      data: [
        { fecha: '2023-01-01', Juan: 70, Ana: 65, Pedro: 80, Lucia: 55 },
        { fecha: '2023-02-01', Juan: 72, Ana: 64, Pedro: 78, Lucia: 58 },
        { fecha: '2023-03-01', Juan: 74, Ana: 63, Pedro: 76, Lucia: 60 },
        { fecha: '2023-04-01', Juan: 76, Ana: 62, Pedro: 74, Lucia: 62 },
        { fecha: '2023-05-01', Juan: 75, Ana: 60, Pedro: 72, Lucia: 64 },
        { fecha: '2023-06-01', Juan: 73, Ana: 61, Pedro: 70, Lucia: 65 },
        { fecha: '2023-07-01', Juan: 72, Ana: 60, Pedro: 68, Lucia: 66 },
        { fecha: '2023-08-01', Juan: 71, Ana: 59, Pedro: 67, Lucia: 67 },
      ],
      xkey: 'fecha', // Llave para el eje X (Fecha)
      ykeys: ['Juan', 'Ana', 'Pedro', 'Lucia'], // Llaves para cada usuario en el eje Y
      labels: ['Juan', 'Ana', 'Pedro', 'Lucía'], // Etiquetas para cada usuario
      lineColors: ['#1e88e5', '#e91e63', '#ff9800', '#4caf50'], // Colores para cada usuario
      resize: true, // Habilita el redimensionamiento dinámico
    });

    // Forzar la actualización del gráfico cuando la ventana se redimensiona
    window.addEventListener('resize', () => {
      chart.redraw();
    });
  }

  // boton flotante
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia entre abrir y cerrar el menú
  }
  guardarPeso() {
    throw new Error('Method not implemented.');
  }
}
