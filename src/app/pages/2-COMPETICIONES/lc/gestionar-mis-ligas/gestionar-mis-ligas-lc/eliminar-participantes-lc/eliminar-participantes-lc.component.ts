import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { RegistroPesoLc } from 'src/app/models/lc/registro-peso-lc.model';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalService } from 'src/app/services/lc/liga-corporal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eliminar-participantes-lc',
  templateUrl: './eliminar-participantes-lc.component.html',
  styleUrls: ['./eliminar-participantes-lc.component.scss'],
})
export class EliminarParticipantesLcComponent implements OnInit {


  public usuario: Usuario;
  public participantes: RegistroPesoLc[] = [];
  public totalUsuarios: number = 0;
  public idLiga!: string;
  desde: number = 0; // Para paginación o carga incremental
  public ligaCorporal: LigaCorporal[] = []; // ✅ Aquí va la lista que usas con *ngFor

  constructor(
    private usuarioService: UsuarioService,
    private ligaCorporalService: LigaCorporalService,
      private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.idLiga = this.route.snapshot.paramMap.get('id') || ''; // Ajusta el nombre 'id' al que tengas
  if(this.idLiga) {
    // this.cargarParticipantes();
  } else {
    console.error('No se recibió idLiga para cargar participantes');
  }
this.obtenerTodasLasLigas()
    // this.cargarParticipantes();
  }



  obtenerTodasLasLigas(): void {
    const { uid } = this.usuarioService.usuario;
    this.ligaCorporalService.obtenerTodasLasLigasPorIdUsuario(uid).subscribe({
      next: (ligas) => {
        this.ligaCorporal = ligas;
              console.log('Participantes:', this.ligaCorporal);



      },
      error: (err) => {
        console.error('Error al cargar ligas:', err);
      },
    });
  }


  eliminarParticipante(_ligaId: string, participanteId: string): void {
    this.ligaCorporalService.eliminarParticipante(_ligaId, participanteId).subscribe({
      next: () => {
        console.log('Participante eliminado con éxito');
        this.obtenerTodasLasLigas(); // Refrescar lista
      },
      error: (err) => {
        console.error('Error al eliminar participante:', err);
      }
    });
  }

}

