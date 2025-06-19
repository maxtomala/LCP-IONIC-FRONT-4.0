import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLcpService } from 'src/app/services/lcp/registro-peso-lcp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-guardar-peso-secundario-lcp',
  templateUrl: './guardar-peso-secundario-lcp.component.html',
  styleUrls: ['./guardar-peso-secundario-lcp.component.scss'],
})
export class GuardarPesoSecundarioLcpComponent implements OnInit {

  @Input() liga: LigaCorporalProfesional | null = null;
  @Output() pesoGuardadoSecundario = new EventEmitter<void>(); // <-- Emitir evento aquí

  public registroPesoLcpForm!: FormGroup;
  public botonHabilitado = true;
  public usuario!: Usuario;
  public unidadElegida: string = 'kg'; //SABER LA UNIDAD ELEGIDA

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private registroPesoLcpService: RegistroPesoLcpService,
    private toastController: ToastController,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.unidadElegida = this.usuarioService.usuario?.unidad; // SABER LA UNIDAD ELEGIDA

    this.usuario = this.usuarioService.usuario;
    this.registroPesoLcpForm = this.formBuilder.group({
      peso: [
        '',
        [Validators.required, Validators.min(15), Validators.max(350)],
      ],
    });
  }

  campoNoValido(campo: string): boolean {
    const control = this.registroPesoLcpForm.get(campo);
    return !!control && control.invalid && control.touched;
  }


  // solucionar lo de jornada  pedir a backerd seguramente
  guardarPeso(): void {
    if (!this.liga) {
      console.error('No hay liga seleccionada');
      return;
    }
    if (this.registroPesoLcpForm.invalid) {
      this.registroPesoLcpForm.markAllAsTouched();
      this.mostrarToast('❌ Error: Por favor ingresa un peso válido');
      return;
    }

    const peso = this.registroPesoLcpForm.get('peso')!.value;
    const unidad = this.usuario.unidad?.toLowerCase() === 'lb' ? 'lb' : 'kg'; // validar unidad
    const idLiga = this.liga._id!;
    const idParticipante = this.usuario.uid;
    const fecha = new Date();

    this.botonHabilitado = false;

    this.registroPesoLcpService
      .registrarPesoSecundario(idLiga, idParticipante, {
      peso: peso,
      unidad: unidad,
      jornada: 1, //soluionar hacer un metodo para sacar la jornada
      fechaCreacion: fecha,
    })
      .subscribe({
        next: (resp) => {
          console.log('Peso guardado correctamente:', resp);
          this.mostrarToast('✅ Peso registrado correctamente');
          this.registroPesoLcpForm.reset();
          this.botonHabilitado = true;
          this.pesoGuardadoSecundario.emit(); // <-- Emitir evento aquí
        },
        error: (err) => {
          console.error('Error al guardar el peso:', err);
          this.mostrarToast('❌ Error al guardar el peso');
          this.botonHabilitado = true;
        },
      });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      color: mensaje.includes('✅') ? 'success' : 'danger',
    });
    toast.present();
  }
  
}
