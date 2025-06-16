import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-solicitar-competicion-t',
  templateUrl: './e-solicitar-competicion-t.page.html',
  styleUrls: ['./e-solicitar-competicion-t.page.scss'],
})
export class ESolicitarCompeticionTPage   {

  lpcParticipacionForm: FormGroup;
  mostrarFormulario = false;

  // Opciones para select
  public opcionObjetivo = ['Bajar de peso', 'Subir de peso'];
  public opcionQuiniela = ['si', 'no', 'ambas'];
  public tamanoTorneo = ['16 participantes(duracion 4 semanas)', '32 participantes(duracion 5 semanas)', 'Cualquiera'];

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.lpcParticipacionForm = this.fb.group({
      participar: ['', Validators.required],
      tipoLcp: [''],
      objetivo: [''],
      quiniela: [''],
      categoriaGenero: [''],
      tipoEnfrentamiento: [''],
      disponibilidad: ['']
    });
  }

  onParticiparChange(event: any) {
    this.mostrarFormulario = event.detail.value === 'si';
    if (!this.mostrarFormulario) {
      // Si el usuario selecciona 'No', limpiamos el resto del formulario
      this.lpcParticipacionForm.reset({
        participar: 'no'
      });
    }
  }

  submitForm() {
    if (this.lpcParticipacionForm.valid) {
      console.log(this.lpcParticipacionForm.value);
      // Aquí puedes manejar el envío del formulario
    }
  }
}
