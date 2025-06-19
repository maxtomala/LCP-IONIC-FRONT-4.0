import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalProfesionalService } from 'src/app/services/lcp/liga-corporal-profesional.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-grupos-lcp',
  templateUrl: './mis-grupos-lcp.component.html',
  styleUrls: ['./mis-grupos-lcp.component.scss'],
})
export class MisGruposLcpComponent implements  OnInit {
@Output() ligaSeleccionadaChange = new EventEmitter<LigaCorporalProfesional>();


  public ligaCorporalProfesional: LigaCorporalProfesional[] = [];
  // para almacenar las ligas en botones
  public ligas: any[] = [];
  public usuario: Usuario;
  public cargando2: boolean = true;

  public idLigaSeleccionadaActual: any;
  public ligaSeleccionada: LigaCorporalProfesional | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private ligaCorporalService: LigaCorporalProfesionalService
  ) {}

  ngOnInit() {
    this.obtenerTodasLasLigas();
  }
  obtenerTodasLasLigas(): void {
    this.cargando2 = true;
    const id = this.usuarioService.usuario.uid;
    this.ligaCorporalService.obtenerTodasLasLigasPorIdUsuario(id).subscribe(
      (resp: any[]) => {
        if (resp && resp.length > 0) {
          // console.log('Ligas corporales obtenidas:', resp);
          this.ligaCorporalProfesional = resp;

          this.seleccionarPrimeraLiga();
        } else {
          console.error(
            'El servicio devolvió una respuesta vacía o no válida.'
          );
        }
        this.cargando2 = false;
      },
      (error) => {
        console.error('Error al obtener las ligas corporales:', error);
        this.cargando2 = false;
      }
    );
  }

  // seleccionarPrimeraLiga por defecto va con*accionBoton()
  seleccionarPrimeraLiga(): void {
    // Verifica si hay ligas disponibles y selecciona la primera
    if (this.ligaCorporalProfesional && this.ligaCorporalProfesional.length > 0) {
      this.accionBoton(this.ligaCorporalProfesional[0].nombre);
      console.log(this.idLigaSeleccionadaActual);


    }
  }


accionBoton(nombreLiga: string) {
  this.ligaSeleccionada = this.ligaCorporalProfesional.find(liga => liga.nombre === nombreLiga);
  if (this.ligaSeleccionada) {
    this.ligaSeleccionadaChange.emit(this.ligaSeleccionada);
  }
}

}
