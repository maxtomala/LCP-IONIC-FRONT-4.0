import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Output, EventEmitter } from '@angular/core'; // Notificar a la página padre
import { RegistroPesoLp } from 'src/app/models/lp/registro-peso-lp.model';


@Component({
  selector: 'app-guardar-peso-lp',
  templateUrl: './guardar-peso-lp.component.html',
  styleUrls: ['./guardar-peso-lp.component.scss'],
})
export class GuardarPesoLpComponent implements OnInit {
@Output() pesoGuardado = new EventEmitter<void>(); // Notificar a la página padre

  // modelos
  public usuario: Usuario;
  public unidadElegida: string = 'kg'; //SABER LA UNIDAD ELEGIDA
  public botonDisabled: boolean = false;
  public registroPesoLp: RegistroPesoLp;
  public registroPesoLpForm!: FormGroup;



  constructor(
    private registroPesoLpService: RegistroPesoLpService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastController: ToastController

  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario
    this.unidadElegida = this.usuarioService.usuario?.unidad; // SABER LA UNIDAD ELEGIDA

    this.registroPesoLpForm = this.formBuilder.group({
      pesoActual: [
        null,
        [Validators.required, Validators.min(15), Validators.max(350)],
      ],
    });
  }
  campoNoValido(campo: string): boolean {
    const control = this.registroPesoLpForm.get(campo);
    return control?.invalid && control?.touched;
  }


  guardarPeso(): void {
    if (this.registroPesoLpForm.invalid) {
      this.registroPesoLpForm.markAllAsTouched();
      this.mostrarToast('❌ Error al guardar el peso');
      return;
    }

    if (!this.usuario) {
      console.error('No hay usuario disponible para guardar el peso');
      return;
    }

    const peso = this.registroPesoLpForm.value.pesoActual;

    // Crear instancia del modelo con conversión automática
    const registro = new RegistroPesoLp();
    registro.usuario = this.usuario;
    registro.fechaCreacion = new Date();
    registro.setPeso(peso, this.unidadElegida); // Usa el método con conversión

    this.botonDisabled = true;

    this.registroPesoLpService.guardarPeso(
      this.usuario.uid,
      peso,
      this.unidadElegida
    ).subscribe({
      next: () => {
        this.mostrarToast('✅ Peso guardado correctamente');
        this.pesoGuardado.emit(); // Notificar a la página padre

        this.registroPesoLpForm.reset();

        setTimeout(() => {
          this.botonDisabled = false;
        }, 2500);
      },
      error: (err) => {
        console.error('Error al guardar peso:', err);
        this.botonDisabled = false;
        this.mostrarToast('❌ Error al guardar el peso');
      }
    });
  }



// alert de guadado correctamente
async mostrarToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000,       // en milisegundos (2 segundos)
    position: 'bottom',   // top, middle, bottom
    cssClass: 'toast-custom-success' //  Clase personalizada
  });

  await toast.present();
}


}
