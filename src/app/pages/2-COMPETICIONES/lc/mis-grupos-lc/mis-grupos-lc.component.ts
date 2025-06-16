import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalService } from 'src/app/services/lc/liga-corporal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-grupos-lc',
  templateUrl: './mis-grupos-lc.component.html',
  styleUrls: ['./mis-grupos-lc.component.scss'],
})
export class MisGruposLcComponent implements OnInit {
@Output() ligaSeleccionadaChange = new EventEmitter<LigaCorporal>();


  public ligaCorporal: LigaCorporal[] = [];
  // para almacenar las ligas en botones
  public ligas: any[] = [];
  public usuario: Usuario;
  public cargando2: boolean = true;

  public idLigaSeleccionadaActual: any;
  public ligaSeleccionada: LigaCorporal | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private ligaCorporalService: LigaCorporalService
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
          this.ligaCorporal = resp;

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
    if (this.ligaCorporal && this.ligaCorporal.length > 0) {
      this.accionBoton(this.ligaCorporal[0].nombre);
      console.log(this.idLigaSeleccionadaActual);

      // graficas lineal
      // Llama a obtenerPesosParticipante después de seleccionar la liga
    }
  }


accionBoton(nombreLiga: string) {
  this.ligaSeleccionada = this.ligaCorporal.find(liga => liga.nombre === nombreLiga);
  if (this.ligaSeleccionada) {
    this.ligaSeleccionadaChange.emit(this.ligaSeleccionada);
  }
}

}
