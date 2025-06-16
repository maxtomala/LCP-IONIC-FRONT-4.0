import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-peso-lp',
  templateUrl: './editar-peso-lp.component.html',
  styleUrls: ['./editar-peso-lp.component.scss'],
})
export class EditarPesoLpComponent  implements OnInit {

  ultimosPesos: any[] = [];
  loading = false;
  public usuario: Usuario;
  public unidadElegida: string = 'kg';

  constructor(
    private registroPesoLpService: RegistroPesoLpService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
        this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuario?.unidad?.toLowerCase() || 'kg';

    this.cargarUltimosPesos();
  }
  getTendenciaFlecha(tendencia: string): string {
    if (tendencia === 'Subió') return '⬆️';
    if (tendencia === 'Bajó') return '🔻';
    return '';
  }
cargarUltimosPesos() {
  this.loading = true;
  const uid = this.usuarioService.uid;

  this.registroPesoLpService.getUltimos5PesosConDiferencias(uid).subscribe({
    next: (res) => {
      this.ultimosPesos = res.map(item => ({
        ...item,
        pesoKg: this.unidadElegida === 'lb' ? (item.pesoKg * 2.20462).toFixed(2) : item.pesoKg,
        difKg: item.difKg !== null && this.unidadElegida === 'lb'
          ? (item.difKg * 2.20462).toFixed(2)
          : item.difKg
      }));

      this.loading = false;
      console.log('Últimos pesos:', this.ultimosPesos);
    },
    error: (err) => {
      console.error('Error al cargar últimos pesos:', err);
      this.loading = false;
    }
  });
}




peso: number = 0; // vinculada al input


actualizarPeso() {
  const uid = this.usuarioService.uid;

  // Obtenemos el peso editado del último elemento
  const ultimoPeso = this.ultimosPesos[this.ultimosPesos.length - 1].pesoKg;
  const unidad = 'kg'; // o lo que uses dinámicamente

  this.registroPesoLpService.actualizarUltimoPeso(uid,  ultimoPeso, unidad )
    .subscribe({
      next: res => console.log('Peso actualizado:', res),
      error: err => console.error('Error al actualizar:', err)
    });
}


eliminarPeso() {
    const uid = this.usuarioService.uid;
  this.registroPesoLpService.eliminarUltimoPeso(uid)
    .subscribe({
      next: res => console.log('Peso eliminado:', res),
      error: err => console.error('Error al eliminar:', err)
    });
    this.cargarUltimosPesos()
}


}
