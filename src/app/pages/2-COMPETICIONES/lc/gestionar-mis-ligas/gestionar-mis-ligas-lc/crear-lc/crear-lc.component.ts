import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalService } from 'src/app/services/lc/liga-corporal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-lc',
  templateUrl: './crear-lc.component.html',
  styleUrls: ['./crear-lc.component.scss'],
})
export class CrearLcComponent implements OnInit {
  public usuario: Usuario;
  public ligaForm!: FormGroup;
  public opcionesObjetivo = ['bajar de peso', 'subir de peso'];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ligaCorporalService: LigaCorporalService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    this.ligaForm = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
    });
  }

  campoNoValido0(form: FormGroup, campo: string): boolean {
    const control = form.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  crearLiga(): void {
    if (this.ligaForm.invalid) {
      this.ligaForm.markAllAsTouched();
      return;
    }

    const { uid } = this.usuarioService.usuario;
    const { nombre, objetivo } = this.ligaForm.value;

    this.ligaCorporalService.crearLiga(uid, nombre, objetivo).subscribe({
      next: (resp) => {
        console.log('Liga creada:', resp);
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      },
      error: (err) => {
        console.error('Error al crear la liga:', err);
      },
    });
  }
}
