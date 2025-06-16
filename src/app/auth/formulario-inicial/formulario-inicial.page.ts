import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-inicial',
  templateUrl: './formulario-inicial.page.html',
  styleUrls: ['./formulario-inicial.page.scss'],
})

export class FormularioInicialPage implements OnInit {
  public usuario: Usuario;
  public perfilPaso0: FormGroup;
  public perfilPaso1: FormGroup;
  public perfilPaso2: FormGroup;

  public unidadElegida: string;
  public ultimoPeso: number | null = null;
  public pesoIdealMostrar: number | null = null;

  public step = 0;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private registroPesoLpService: RegistroPesoLpService,
    private router: Router
  ) {}

ngOnInit() {
  this.usuario = this.usuarioService.usuario;

  this.unidadElegida = this.usuario?.unidad; // Evita que unidad sea undefined

  this.perfilPaso0 = this.fb.group({
    nombre: [this.usuario.nombre || '', [Validators.required, Validators.minLength(2)]],
    email: [this.usuario.email || '', [Validators.required, Validators.email]],
    apellido1: [this.usuario.apellido1 || '', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    unidad: [this.unidadElegida, Validators.required],
  });

  this.perfilPaso1 = this.fb.group({
    altura: [this.usuario.altura || '', [Validators.required, Validators.min(0.3), Validators.max(2.5)]],
    objetivo: [this.usuario.objetivo || '', Validators.required],
  });

  this.perfilPaso2 = this.fb.group({
    pesoIdeal: ['', [Validators.required, Validators.min(15), Validators.max(150)]],
    pesoActual: ['', [Validators.required, Validators.min(15), Validators.max(150)]],
  });

  // 🔁 Estas llamadas van AL FINAL del ngOnInit
  this.setPesoIdealMostrar();
  this.ultimoPesoRegistrado();
}



  // Paso 0
  campoNoValido0(form: FormGroup, campo: string): boolean {
    const control = form.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  guardarPaso0() {
    if (this.perfilPaso0.invalid) {
      this.perfilPaso0.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email } = this.usuarioService.usuario;
    const datos = {
      role,
      nombre,
      email,
      ...this.perfilPaso0.value,
    };
  console.log('[guardarPaso0] Unidad elegida en el formulario:', this.perfilPaso0.value.unidad);

    this.usuarioService.actualizarUsuario(uid, datos).subscribe({
      next: () => {
        this.usuario = { ...this.usuario, ...datos };
           // 🔁 Actualiza la unidad local en el componente también
      this.unidadElegida = this.perfilPaso0.value.unidad;
      console.log('[guardarPaso0] unidadElegida actualizada a:', this.unidadElegida);

        this.step++;
      },
      error: (err) => console.error('Error al guardar paso 0', err),
    });
  }

  // Paso 1
  campoNoValido1(campo: string): boolean {
    const control = this.perfilPaso1.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  guardarPaso1() {
    if (this.perfilPaso1.invalid) {
      this.perfilPaso1.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email } = this.usuarioService.usuario;
    const datos = {
      role,
      nombre,
      email,
      ...this.perfilPaso1.value,
    };

    this.usuarioService.actualizarUsuario(uid, datos).subscribe({
      next: () => {
        const { altura, objetivo } = this.perfilPaso1.value;
        this.usuario.altura = altura;
        this.usuario.objetivo = objetivo;

        this.step++;
      },
      error: (err) => console.error('Error al guardar paso 1', err),
    });
    this.setPesoIdealMostrar();
this.ultimoPesoRegistrado();

  }

  // Paso 2
  campoNoValido2(campo: string): boolean {
    const control = this.perfilPaso2.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  guardarPaso2() {
    if (this.perfilPaso2.invalid) {
      this.perfilPaso2.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email  } = this.usuarioService.usuario;
    const { pesoIdeal, pesoActual } = this.perfilPaso2.value;

      // ✅ Usa la unidad actualizada
  const unidad = this.unidadElegida;
  console.log('[guardarPaso2] unidadElegida actual:', unidad);

    const datosPerfil = {
      role,
      nombre,
      email,
      pesoIdeal,
      ...this.perfilPaso1.value,
    };

    this.usuarioService.actualizarUsuario(uid, datosPerfil).subscribe({
      next: () => {
        console.log('Peso ideal actualizado en perfil');
        this.registroPesoLpService.guardarPeso(uid, pesoActual, unidad).subscribe({
          next: () => {
            console.log('Peso actual registrado correctamente');
            this.router.navigate(['./pages/lp']);
            this.step++;
          },
          error: (err) => console.error('Error al registrar peso actual', err),
        });
      },
      error: (err) => console.error('Error al actualizar perfil', err),
    });
  }

  // Navegación de pasos
  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 0) this.step--;
  }

  volver() {
    this.navCtrl.back();
  }

  // Obtener último peso registrado (según unidad)
ultimoPesoRegistrado(): void {
  const uid = this.usuarioService.usuario.uid;

  this.registroPesoLpService.obtenerUltimoPeso(uid).subscribe({
    next: (registro) => {
      const unidad = this.unidadElegida?.toLowerCase() || 'kg';

      this.ultimoPeso =
        unidad === 'kg'
          ? registro.pesoKg
          : registro.pesoLb;

      this.perfilPaso2.patchValue({ pesoActual: this.ultimoPeso });
    },
    error: (err) => {
      console.error('No se pudo obtener el último peso:', err);
      this.ultimoPeso = null;
    },
  });
}


  // Mostrar peso ideal según unidad

setPesoIdealMostrar(): void {
  if (!this.usuario || !this.unidadElegida) {
    console.warn('No hay usuario o unidad para setPesoIdealMostrar');
    return;
  }

  const unidad = this.unidadElegida.toLowerCase();

  this.pesoIdealMostrar =
    unidad === 'kg'
      ? this.usuario.pesoIdealKg ?? null
      : this.usuario.pesoIdealLb ?? null;

  this.perfilPaso2.patchValue({ pesoIdeal: this.pesoIdealMostrar });
}

}
