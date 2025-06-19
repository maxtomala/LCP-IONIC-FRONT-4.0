import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcpService } from 'src/app/services/lcp/registro-peso-lcp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabla-registro-inicial-lcp',
  templateUrl: './tabla-registro-inicial-lcp.component.html',
  styleUrls: ['./tabla-registro-inicial-lcp.component.scss'],
})
export class TablaRegistroInicialLcpComponent implements OnInit, OnChanges {
  @Input() liga: LigaCorporalProfesional | null = null;


  public participanteLcp: any[] = [];
  public unidadElegida: string = 'kg'; 

  constructor(
    private usuarioService: UsuarioService,
    private registroPesoLcpService: RegistroPesoLcpService,
    private toastController: ToastController
  ) {}

  ngOnInit() {

  }

// para recibir los cambios de cuandos e cambia de liga
ngOnChanges(changes: SimpleChanges) {
    if (changes['liga'] && changes['liga'].currentValue) {
      this.obtenerPesoInicial();
    }

        this.unidadElegida = this.usuarioService.usuario?.unidad; // SABER LA UNIDAD ELEGIDA

  }

  obtenerPesoInicial() {
    if (!this.liga) {
      console.warn('No hay liga seleccionada para obtener registros de peso inicial.');
      return;
    }

    this.registroPesoLcpService.obtenerRegistrarPesosIniciales(this.liga._id).subscribe({
      next: (resp) => {
        console.log('Registros de peso inicial obtenidos:', resp);
        // Asignar los registros para usarlos en el template
        this.participanteLcp = resp.registros || [];
      },
      error: async (err) => {
        console.error('Error al obtener registros de peso inicial:', err);
        const toast = await this.toastController.create({
          message: 'Error al obtener registros de peso inicial',
          duration: 3000,
          color: 'danger',
        });
        toast.present();
      },
    });
  }
}
