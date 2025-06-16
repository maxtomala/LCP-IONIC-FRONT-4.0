import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { RegistroPesoLp } from 'src/app/models/lp/registro-peso-lp.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styleUrls: ['./grafica-donut.component.scss'],
})
export class GraficaDonutComponent implements AfterViewInit, OnInit {
  @ViewChild('myPieChart', { static: false }) pieChartRef!: ElementRef;

  public chartInstance: Chart | null = null; // Para destruir gráfica previa si existe

  ngAfterViewInit() {
    this.crearGraficaDonut();
  }

  public usuario: Usuario;
  public unidad: string;
  public objetivo: string;
  public pesoIdealMostrar: number | null = null;
  public ultimoPeso: number | null = null;

  public porcentajeCompletado: number = 0;
  public metaConseguida: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLpService: RegistroPesoLpService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.unidad = this.usuario?.unidad || 'kg'; // Obtener unidad del usuario
    this.objetivo = this.usuario?.objetivo; // evitar undefined
    this.pesoIdealMostrar = this.obtenerPesoIdealInicial(); // mostrar peso ideal
    this.ultimoPesoRegistrado();

  }

  // mostrar peso ideal
  obtenerPesoIdealInicial(): number | null {
    if (!this.usuario) {
      console.warn('[pesoIdeal] Usuario no definido');
      return null;
    }

    const unidad = this.unidad?.toLowerCase();

    if (unidad === 'kg') return this.usuario.pesoIdealKg ?? null;
    if (unidad === 'lb') return this.usuario.pesoIdealLb ?? null;

    console.warn('[pesoIdeal] Unidad inválida:', unidad);
    return null;
  }

  ultimoPesoRegistrado(): void {
    const usuarioId = this.usuarioService.usuario?.uid;

    this.registroPesoLpService.obtenerUltimoPeso(usuarioId).subscribe({
      next: (registro) => {
        if (!registro) {
          this.ultimoPeso = null;
          return;
        }

        const unidadLower = this.unidad.toLowerCase();

        if (unidadLower === 'kg') {
          this.ultimoPeso =
            registro.pesoKg ?? RegistroPesoLp.lbToKg(registro.pesoLb);
        } else if (unidadLower === 'lb') {
          this.ultimoPeso =
            registro.pesoLb ?? RegistroPesoLp.kgToLb(registro.pesoKg);
        } else {
          this.ultimoPeso = null;
        }
        this.ultimoPeso;
        console.log('Peso actualizado:', this.ultimoPeso); // <--- Aquí

        // ✅ Cuando ya tienes los datos, crea la gráfica
        this.crearGraficaDonut(); // Aquí sí tienes this.ultimoPeso, pesoIdealMostrar, etc.
      },
      error: (err) => {
        console.error('No se pudo obtener el último peso:', err);
        this.ultimoPeso = null;
      },
    });
  }
  ultimoPeso2(arg0: string, ultimoPeso2: any) {
    throw new Error('Method not implemented.');
  }

  crearGraficaDonut(): void {
    if (this.pesoIdealMostrar == null || this.ultimoPeso == null) return;

    const pesoIdeal = this.pesoIdealMostrar;
    const pesoActual = this.ultimoPeso;

    let porcentajeAvanzado: number;
    let porcentajeRestante: number;

    // Calcular progreso según el objetivo
    if (this.objetivo.toLowerCase() === 'bajar de peso') {
      if (pesoActual <= pesoIdeal) {
        porcentajeAvanzado = 100;
        porcentajeRestante = 0;
        this.metaConseguida = true;
      } else {
        porcentajeAvanzado = ((pesoActual - pesoIdeal) / pesoActual) * 100;
        porcentajeRestante = 100 - porcentajeAvanzado;
        this.metaConseguida = false;
      }
    } else if (this.objetivo.toLowerCase() === 'subir de peso') {
      if (pesoActual >= pesoIdeal) {
        porcentajeAvanzado = 100;
        porcentajeRestante = 0;
        this.metaConseguida = true; // ✅
      } else {
        porcentajeAvanzado = ((pesoIdeal - pesoActual) / pesoIdeal) * 100;
        porcentajeRestante = 100 - porcentajeAvanzado;
        this.metaConseguida = false;
      }
    }

    this.porcentajeCompletado = porcentajeAvanzado;

    // Crear los datos
    const data = {
      labels: ['Progreso', 'Restante'],
      datasets: [
        {
          data: [porcentajeAvanzado, porcentajeRestante],
          backgroundColor: ['#4caf50', '#e0e0e0'],
          hoverBackgroundColor: ['#45a049', '#d6d6d6'],
          borderWidth: 1,
        },
      ],
    };

    // Opciones del gráfico
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '85%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              const value = tooltipItem.raw;
              return `${value.toFixed(1)}%`;
            },
          },
        },
      },
    };

    const ctx = this.pieChartRef.nativeElement.getContext('2d');

    // Si ya existe un gráfico, destruirlo
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }
}

// createPieChart() {
//   const ctx = this.pieChartRef.nativeElement.getContext('2d');
//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ['Completado', 'Restante'],
//       datasets: [{
//         data: [70, 30], // Datos falsos
//         backgroundColor: ['#36A2EB', '#FF6384'],
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           display: true,
//           position: 'bottom'
//         }
//       }
//     }
//   });
// }
