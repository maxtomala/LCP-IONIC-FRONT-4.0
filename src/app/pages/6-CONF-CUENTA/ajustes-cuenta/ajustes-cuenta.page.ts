import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-cuenta',
  templateUrl: './ajustes-cuenta.page.html',
  styleUrls: ['./ajustes-cuenta.page.scss'],
})
export class AjustesCuentaPage implements OnInit {





  // public usuario: Usuario;
  public perfilForm: FormGroup;
  constructor(private fb: FormBuilder, private navCtrl: NavController) {}




  ngOnInit() {
    this.perfilForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }



campoNoValido(campo: string): boolean {
  const control = this.perfilForm.get(campo);
  return control?.invalid && control?.touched || false;
}

actualizarPerfil() {
  if (this.perfilForm.invalid) return;

  const { nombre, email } = this.perfilForm.value;
  // Tu lógica para guardar cambios
}

}
