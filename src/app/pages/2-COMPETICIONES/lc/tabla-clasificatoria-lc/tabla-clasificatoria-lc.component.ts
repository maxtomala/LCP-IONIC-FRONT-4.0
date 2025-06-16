import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Observable } from 'rxjs';
import { TablaClasificatoriaLcService } from 'src/app/services/lc/tabla-clasificatoria-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import * as moment from 'moment';

@Component({
  selector: 'app-tabla-clasificatoria-lc',
  templateUrl: './tabla-clasificatoria-lc.component.html',
  styleUrls: ['./tabla-clasificatoria-lc.component.scss'],
})

export class  TablaClasificatoriaLcComponent implements OnInit, OnChanges {
  @Input() liga: LigaCorporal | null = null;

  public moment = moment;

  public clasificacion: any[] = [];
  public paginaActual = 1;
  public totalPaginas = 1;
  public limite = 10;
  public semanaActual!: number;
  public anoActual!: number;
  public cargando = false;
  public mensaje = '';
  public unidadElegida: string = 'kg';
  public usuario!: Usuario;

  // Estas propiedades para controlar límites de paginación
  public semanaMinima!: number;
  public anoMinimo!: number;
  public semanaMaxima!: number;
  public anoMaximo!: number;

  constructor(
    private tablaClasificatoriaLcService: TablaClasificatoriaLcService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuario?.unidad || 'kg';

    const ahora = moment();

    this.semanaActual = this.semanaActual || ahora.isoWeek();
    this.anoActual = this.anoActual || ahora.year();

    // Límite máximo: semana y año actual
    this.semanaMaxima = ahora.isoWeek();
    this.anoMaximo = ahora.year();

    // Límite mínimo: 8 semanas atrás
    const limite = ahora.clone().subtract(8, 'weeks');
    this.semanaMinima = limite.isoWeek();
    this.anoMinimo = limite.year();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga?._id) {
      this.paginaActual = 1;
      this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual);
    }
  }

  abs(value: number): number {
    return Math.abs(value);
  }

  cargarClasificacion(ligaId: string, semana: number, anio: number, pagina: number) {
    this.cargando = true;
    this.mensaje = '';

    this.tablaClasificatoriaLcService.obtenerTablaSemana(ligaId, semana, anio, pagina, this.limite)
      .subscribe({
        next: (resp) => {
          if (resp.resultados.length === 0 && pagina > 1) {
            this.mensaje = 'No hay más participantes en esta semana.';
            this.cargando = false;
            return;
          }

          this.clasificacion = resp.resultados || [];
          this.totalPaginas = resp.totalPaginas || 1;
          this.semanaActual = semana;
          this.anoActual = anio;
          this.paginaActual = pagina;
          this.mensaje = this.clasificacion.length ? '' : 'No hay datos para esta semana.';
          this.cargando = false;
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Error al cargar la clasificación';
          this.cargando = false;
        }
      });
  }



paginaSiguiente() {
  if (!this.liga?._id) return;

  if (this.paginaActual < this.totalPaginas) {
    // Solo cambio de página dentro de misma semana
    this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual + 1);
  } else {
    // Cambio de semana, reseteo página
    let nuevaSemana = this.semanaActual + 1;
    let nuevoAnio = this.anoActual;

    if (nuevaSemana > moment().isoWeeksInYear()) {
      nuevaSemana = 1;
      nuevoAnio++;
    }

    this.cargarClasificacion(this.liga._id, nuevaSemana, nuevoAnio, 1);
  }
}

paginaAnterior() {
  if (!this.liga?._id) return;

  if (this.paginaActual > 1) {
    // Solo cambio de página dentro de misma semana
    this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual - 1);
  } else {
    // Cambio a semana anterior, última página
    let nuevaSemana = this.semanaActual - 1;
    let nuevoAnio = this.anoActual;

    if (nuevaSemana < 1) {
      nuevoAnio--;
      nuevaSemana = moment(`${nuevoAnio}`, "YYYY").isoWeeksInYear();
    }

    // Primero consulto para saber cuántas páginas tiene la semana anterior
    this.tablaClasificatoriaLcService.obtenerTablaSemana(this.liga._id, nuevaSemana, nuevoAnio, 1, this.limite)
      .subscribe(resp => {
        if (resp.totalPaginas && resp.totalPaginas > 0) {
          this.cargarClasificacion(this.liga._id, nuevaSemana, nuevoAnio, resp.totalPaginas);
        } else {
          // No hay datos en semana anterior, puedes mostrar mensaje o no hacer nada
        }
      });
  }
}



}
