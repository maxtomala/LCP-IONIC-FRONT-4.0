import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Observable } from 'rxjs';
import { TablaClasificatoriaLcService } from 'src/app/services/lc/tabla-clasificatoria-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
// import * as moment from 'moment';

@Component({
  selector: 'app-tabla-clasificatoria-lc',
  templateUrl: './tabla-clasificatoria-lc.component.html',
  styleUrls: ['./tabla-clasificatoria-lc.component.scss'],
})

export class TablaClasificatoriaLcComponent  implements OnInit, OnChanges {

  @Input() liga: LigaCorporal | null = null;
  public probando: any[] = [];
  public probando2: any[] = [];

  public clasificacion: any[] = [];
  public paginaActual = 1;
  public limite = 10;
  public semanaActual!: number;
  public anoActual!: number;
  public cargando = false;
  public mensaje = '';
  public unidadElegida: string = 'kg';
  public usuario!: Usuario;

  constructor(
    private tablaClasificatoriaLcService: TablaClasificatoriaLcService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuario?.unidad || 'kg';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga?._id) {
      this.paginaActual = 1;

      // Si quieres usar semana y año actuales, puedes obtenerlos aquí con moment
      // const moment = require('moment');
      // const ahora = moment();
      // this.semanaActual = ahora.isoWeek();
      // this.anoActual = ahora.year();

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
          this.clasificacion = resp.resultados || [];
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
    if (this.liga?._id && this.paginaActual < Math.ceil(this.clasificacion.length / this.limite)) {
      this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual + 1);
    }
  }

  paginaAnterior() {
    if (this.liga?._id && this.paginaActual > 1) {
      this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual - 1);
    }
  }
}
