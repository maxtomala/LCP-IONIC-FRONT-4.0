import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    private toastController: ToastController,

  ) {}

  ngOnInit() {

    this.obtenerTodasLasLigasPorIdUsuario();
  }

  obtenerTodasLasLigasPorIdUsuario(): void {
    const { uid } = this.usuarioService.usuario;
    this.ligaCorporalService.obtenerTodasLasLigasPorIdUsuario(uid).subscribe({
      next: (ligas) => {
        this.ligaCorporal = ligas;
      },
      error: (err) => {
      },
    });
  }

 // Método para eliminar participante con toast en éxito/error
  eliminarParticipante(_ligaId: string, participanteId: string): void {
    this.ligaCorporalService.eliminarParticipante(_ligaId, participanteId).subscribe({
      next: async () => {
        // Refrescar lista
        this.obtenerTodasLasLigasPorIdUsuario();
        // Mostrar toast de éxito
        await this.presentToast('Participante eliminado con éxito.', 'success');
      },
      error: async (err) => {
        // Mostrar toast de error
        await this.presentToast('Error al eliminar participante. Intente de nuevo.', 'danger');
      },
    });
  }

  // Método auxiliar para mostrar toast
  private async presentToast(
    message: string,
    color: 'success' | 'danger' = 'success'
  ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
      cssClass: 'toast-mensaje-centro' // si quieres centrar texto en el toast
    });
    await toast.present();
  }
}
