import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
      boletin: [false],
    });
  }

  campoNoValido(campo: string): boolean {
    const control = this.registerForm.get(campo);
    return control?.invalid && (control.dirty || control.touched) || false;
  }

  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    return pass1 !== pass2 && this.registerForm.get('password2')?.touched;
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terminos')?.value && this.registerForm.get('terminos')?.touched;
  }

  crearUsuario() {
    if (this.registerForm.invalid || this.contrasenasNoValidas() || this.aceptaTerminos()) {
      // marcar todos los campos para mostrar errores
      this.registerForm.markAllAsTouched();
      return;
    }

    const usuario = this.registerForm.value;
    console.log('Usuario registrado:', usuario);
    // Aquí la lógica para crear el usuario (backend o Firebase etc)
  }
}
