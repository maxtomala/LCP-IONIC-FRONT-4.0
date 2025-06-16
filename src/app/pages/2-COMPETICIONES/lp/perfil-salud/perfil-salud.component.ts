import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistroPesoLp } from 'src/app/models/lp/registro-peso-lp.model'; // ajusta la ruta según tu proyecto

@Component({
  selector: 'app-perfil-salud',
  templateUrl:
  './perfil-salud.component.html',
  styleUrls: ['./perfil-salud.component.scss'],
})
export class PerfilSaludComponent implements OnInit {

  public usuario: Usuario;

  public ultimoPeso: number | null = null;
  public unidad: string = 'kg'; // o 'lb', según lo que tenga el usuario

  public pesoIdeal: number | null = null; // mostrar peso ideal

  constructor(
    private registroPesoLpService: RegistroPesoLpService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidad = this.usuarioService.usuario?.unidad || 'kg'; // Obtener unidad del usuario

    this.ultimoPesoRegistrado();


    this.pesoIdeal = this.obtenerPesoIdealInicial(); // mostrar peso ideal

  }

  // usando el metodo estatico q hay en el modelo registro-peso-LpPage, tb se importa  aqui
ultimoPesoRegistrado(): void {
  const usuarioId = this.usuarioService.usuario?.uid;

  this.registroPesoLpService.obtenerUltimoPeso(usuarioId).subscribe({
    next: (registro) => {
      if (!registro) {
        this.ultimoPeso = null;
        return;
      }

      const unidadLower = this.unidad.toLowerCase();

      // Si la unidad es kg, mostramos pesoKg, si es lb, convertimos si es necesario
      if (unidadLower === 'kg') {
        // Si registro.pesoKg está definido, lo usamos directamente
        this.ultimoPeso = registro.pesoKg ?? RegistroPesoLp.lbToKg(registro.pesoLb);
      } else if (unidadLower === 'lb') {
        // Si registro.pesoLb está definido, lo usamos directamente
        this.ultimoPeso = registro.pesoLb ?? RegistroPesoLp.kgToLb(registro.pesoKg);
      } else {
        console.warn('Unidad no válida para peso:', this.unidad);
        this.ultimoPeso = null;
      }
            console.log('Peso actualizado:', this.ultimoPeso);  // <--- Aquí

    },
    error: (err) => {
      console.error('No se pudo obtener el último peso:', err);
      this.ultimoPeso = null;
    },
  });
}

// mostrar peso ideal
   obtenerPesoIdealInicial(): number | null {
    if (!this.usuario) return null;

    const unidad = this.unidad?.toLowerCase();
    if (unidad === 'kg') return this.usuario.pesoIdealKg ?? null;
    if (unidad === 'lb') return this.usuario.pesoIdealLb ?? null;

    return null;
  }

}
