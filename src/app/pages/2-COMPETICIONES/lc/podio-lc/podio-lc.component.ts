import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { TablaClasificatoriaLcService } from 'src/app/services/lc/tabla-clasificatoria-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-podio-lc',
  templateUrl: './podio-lc.component.html',
  styleUrls: ['./podio-lc.component.scss'],
})
export class PodioLcComponent implements OnInit, OnChanges {
  @Input() liga: LigaCorporal | null = null;

  semanasConPodio: any[] = [];
  paginaActual: number = 1;
  totalPaginas: number = 1;
  mensaje: string = '';

  constructor(
    private tablaClasificatoriaLcService: TablaClasificatoriaLcService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    // Si liga ya viene definida al iniciar
    if (this.liga?._id) {
      this.cargarPodio();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['liga'] && this.liga?._id) {
      this.paginaActual = 1; // reset página al cambiar liga
      this.cargarPodio();
    }
  }

  cargarPodio() {
    if (!this.liga?._id) {
      this.mensaje = 'Liga no seleccionada';
      return;
    }

this.tablaClasificatoriaLcService.obtenerPodioPaginado(this.liga._id, this.paginaActual, 1).subscribe({
  next: (resp) => {
    this.totalPaginas = resp.totalPaginas;
    this.semanasConPodio = resp.semanas;

    this.semanasConPodio.forEach(semana => {
      // Creamos un array con las posiciones 1, 2 y 3
      for (let pos = 1; pos <= 3; pos++) {
        // Buscamos si en el podio existe un participante en esta posición
        const participantePos = semana.podio.find(p => p.posicion === pos);
        if (!participantePos) {
          // Si no existe, agregamos un objeto con imagen por defecto para mantener el espacio
          semana.podio.push({
            posicion: pos,
            participante: {
              nombre: 'Sin participante',
              img: 'src/assets/podio-lc/no-img.jpg', // ruta a tu imagen por defecto
            },
            // Puedes agregar campos que necesites para que el HTML no rompa
            ligaCorporal: semana.ligaCorporal || null,
            anio: semana.anio,
            semana: semana.semana,
            diferencia: 0,
            fechaCalculo: null,
            pesoActual: null,
            pesoAnterior: null,
            porcentajeCambio: null,
            unidad: 'kg',
          });
        }
      }
      // Ordenamos el podio para que quede en orden de posición
      semana.podio.sort((a, b) => a.posicion - b.posicion);
    });

    this.paginaActual = resp.pagina;
  },
  error: (err) => {
    console.error(err);
    this.mensaje = 'Error al cargar el podio';
  },
});
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarPodio();
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarPodio();
    }
  }
}
