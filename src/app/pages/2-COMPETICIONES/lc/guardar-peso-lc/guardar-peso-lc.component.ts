import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcService } from 'src/app/services/lc/registro-peso-lc.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-guardar-peso-lc',
  templateUrl: './guardar-peso-lc.component.html',
  styleUrls: ['./guardar-peso-lc.component.scss'],
})
export class GuardarPesoLcComponent implements OnInit {
  @Input() liga: LigaCorporal | null = null;

  public registroPesoLcForm!: FormGroup;
  public botonHabilitado: boolean = true;
  public unidadElegida: string = 'kg'; //SABER LA UNIDAD ELEGIDA
  public usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private registroPesoLcService: RegistroPesoLcService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuarioService.usuario?.unidad; // SABER LA UNIDAD ELEGIDA
    this.registroPesoLcForm = this.formBuilder.group({
      peso: [
        '',
        [Validators.required, Validators.min(15), Validators.max(350)],
      ],
    });
  }

  campoNoValido(campo: string): boolean {
    const control = this.registroPesoLcForm.get(campo);
    return control?.invalid && control?.touched;
  }

  guardarPeso(): void {
    if (!this.liga) {
      console.error('No hay liga seleccionada');
      return;
    }
    if (this.registroPesoLcForm.invalid) {
      this.registroPesoLcForm.markAllAsTouched();
      this.mostrarToast('❌ Error al guardar el peso');
      return;
    }

    const peso = this.registroPesoLcForm.get('peso')?.value;
    const unidad = this.usuarioService.usuario.unidad?.toLowerCase() as
      | 'kg'
      | 'lb'; // valor por defecto
    const idLiga = this.liga._id!;
    const idParticipante = this.usuarioService.usuario.uid;
    const fecha = new Date();

    this.botonHabilitado = false;

    this.registroPesoLcService
      .guardarPesoParticipante(idLiga, idParticipante, peso, unidad, fecha)
      .subscribe({
        next: (resp) => {
          console.log('Peso guardado correctamente:', resp);
          this.registroPesoLcForm.reset({ unidad: 'kg' });
          this.botonHabilitado = true;
        },
        error: (err) => {
          console.error('Error al guardar el peso:', err);
          this.botonHabilitado = true;
        },
      });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
