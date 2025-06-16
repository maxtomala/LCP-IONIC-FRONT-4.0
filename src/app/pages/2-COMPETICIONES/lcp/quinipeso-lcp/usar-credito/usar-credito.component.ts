import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usar-credito',
  templateUrl: './usar-credito.component.html',
  styleUrls: ['./usar-credito.component.scss'],
})
export class UsarCreditoComponent  implements OnInit {




  constructor() { }


  mostrarParticipantes = true;
  tablaClasificatoria: any[] = [];
  creditos: number = 0;
  jornadaActualReclamarCreditos: number = 1;
  jornadas: number[] = [];
  participanteSeleccionado: any = null; // Este debe ser seteado desde fuera

  ngOnInit() {
    this.obtenerTablaClasificatoria();
    this.generarListaJornadas();
  }

  obtenerTablaClasificatoria() {
    // Simula obtener datos (reemplaza con API real)
    this.tablaClasificatoria = [
      {
        nombre: 'Juan Pérez',
        puntosTotales: 12,
        img: 'juan.jpg',
      },
      {
        nombre: 'Ana Gómez',
        puntosTotales: 10,
        img: 'ana.jpg',
      },
      {
        nombre: 'Carlos Ruiz',
        puntosTotales: 8,
        img: 'carlos.jpg',
      },
    ];
  }

  generarListaJornadas() {
    this.jornadas = Array.from({ length: 10 }, (_, i) => i + 1); // Jornadas del 1 al 10
  }

  actualizarTabla() {
    // Lógica para actualizar la tabla (puede volver a llamar a la API)
    this.obtenerTablaClasificatoria();
  }

  mostrarTablaParticipantes() {
    this.mostrarParticipantes = !this.mostrarParticipantes;
  }

  seleccionarParticipante(participante: any) {
      this.participanteSeleccionado = participante;
    console.log('Participante seleccionado:', participante);
    // Aquí podrías guardar el participante o abrir un modal de confirmación
  }

  restarPuntosConCredito() {
    if (!this.participanteSeleccionado) return;

    // Aquí iría la lógica para consumir el crédito y restar un punto
    console.log(`Restando 1 punto a: ${this.participanteSeleccionado.nombre}`);
  alert(`Le has restado 1 punto a ${this.participanteSeleccionado.nombre}`);

    // Después puedes limpiar el estado o mostrar una confirmación
    this.participanteSeleccionado = null;
    // También podrías mostrar un toast o alerta de éxito
  }
}

