import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TablaClasificatoriaLcService } from 'src/app/services/lc/tabla-clasificatoria-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import * as moment from 'moment';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';

@Component({
  selector: 'app-tabla-clasificatoria-lcp',
  templateUrl: './tabla-clasificatoria-lcp.component.html',
  styleUrls: ['./tabla-clasificatoria-lcp.component.scss'],
})
export class TablaClasificatoriaLcpComponent  implements OnInit {
Math: any;
paginaAnterior() {
throw new Error('Method not implemented.');
}
  @Input() liga: LigaCorporalProfesional | null = null;


clasificacion: any[] = [
  {
    posicion: 1,
    participante: { nombre: 'Juan Pérez' },
    puntosTotales: 12,
    victorias: 4,
    empates: 0,
    derrotas: 1,
    pesoActual: 78.5,
    diferencia: -2.0
  },

]
  public moment = moment;

  // public clasificacion: any[] = [];
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


  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liga'] && this.liga?._id) {
      // this.paginaActual = 1;
      // this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual);
    }
  }
  // abs(value: number): number {
  //   return Math.abs(value);
  // }

  cargarClasificacion(ligaId: string, semana: number, anio: number, pagina: number) {
    // this.cargando = true;
    // this.mensaje = '';

    // this.tablaClasificatoriaLcService.obtenerTablaSemana(ligaId, semana, anio, pagina, this.limite)
    //   .subscribe({
    //     next: (resp) => {
    //       if (resp.resultados.length === 0 && pagina > 1) {
    //         this.mensaje = 'No hay más participantes en esta semana.';
    //         this.cargando = false;
    //         return;
    //       }

    //       this.clasificacion = resp.resultados || [];
    //       this.totalPaginas = resp.totalPaginas || 1;
    //       this.semanaActual = semana;
    //       this.anoActual = anio;
    //       this.paginaActual = pagina;
    //       this.mensaje = this.clasificacion.length ? '' : 'No hay datos para esta semana.';
    //       this.cargando = false;
    //     },
    //     error: (err) => {
    //       console.error(err);
    //       this.mensaje = 'Error al cargar la clasificación';
    //       this.cargando = false;
    //     }
    //   });
  }



  paginaSiguiente() {
    // if (!this.liga?._id) return;

    // if (this.paginaActual < this.totalPaginas) {
    //   // Solo cambio de página dentro de misma semana
    //   this.cargarClasificacion(this.liga._id, this.semanaActual, this.anoActual, this.paginaActual + 1);
    // } else {
    //   // Cambio de semana, reseteo página
    //   let nuevaSemana = this.semanaActual + 1;
    //   let nuevoAnio = this.anoActual;

    //   if (nuevaSemana > moment().isoWeeksInYear()) {
    //     nuevaSemana = 1;
    //     nuevoAnio++;
    //   }

    //   this.cargarClasificacion(this.liga._id, nuevaSemana, nuevoAnio, 1);
    // }
  }



}
