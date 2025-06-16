import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

declare var Morris: any;

@Component({
  selector: 'app-e-lcp-2',
  templateUrl: './e-lcp-2.page.html',
  styleUrls: ['./e-lcp-2.page.scss'],
})
export class ELcp2Page  implements OnInit, AfterViewInit {
  // boton de guardar peso
  registroPesoLpForm: any;

  // boton flotante
  isMenuOpen = false; // Controla el estado del menú

  constructor() {}

  ngOnInit() {
    console.log();
  }

  ngAfterViewInit() {
    this.createMuscleActivityChart();

    // es otra solucion para ver la grafica  setTimeout(()
    setTimeout(() => {
      this.createLineChart();
    }, 300); // Espera 300 ms antes de crear el gráfico
  }
  // ionViewDidEnter() {
  //   this.createLineChart(); // Crear el gráfico cuando la vista está totalmente visible
  // }

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

  // Gráfica de barra

  createMuscleActivityChart() {
    const ctx = document.getElementById(
      'muscleActivityChart'
    ) as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Pedro', 'Ana', 'Carlos', 'Lucía', 'Mario'],
          datasets: [
            {
              label: 'Horas de actividad muscular',
              data: [5, 7, 3, 8, 6],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.error("Canvas with ID 'muscleActivityChart' not found.");
    }
  }

  // botonde guardar peso
  guardarPeso() {
    throw new Error('Method not implemented.');
  }
  accionBoton(arg0: string) {
    throw new Error('Method not implemented.');
  }

  // boton flotante
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia entre abrir y cerrar el menú
  }

}
