import { Usuario } from "../usuario.model";
import { LigaCorporal } from "./liga-corporal.model";

export class RegistroPesoLc {
  constructor(
    public ligaCorporal: LigaCorporal | string,
    public participante: Usuario | string,
    public pesoKg: number,
    public pesoLb: number,
    public fechaCreacion: Date = new Date(),
    public _id?: string
  ) {}

  static kgToLb(kg: number): number {
    return kg * 2.20462;
  }

  static lbToKg(lb: number): number {
    return lb * 0.453592;
  }

  // Método para crear un nuevo registro con conversión automática
  static crearRegistro(
    ligaCorporal: LigaCorporal | string,
    participante: Usuario | string,
    peso: number,
    unidad: 'kg' | 'lb',
    fechaCreacion?: Date
  ): RegistroPesoLc {
    let pesoKg: number;
    let pesoLb: number;

    if (unidad.toLowerCase() === 'kg') {
      pesoKg = peso;
      pesoLb = this.kgToLb(peso);
    } else {
      pesoLb = peso;
      pesoKg = this.lbToKg(peso);
    }

    return new RegistroPesoLc(
      ligaCorporal,
      participante,
      Number(pesoKg.toFixed(2)),
      Number(pesoLb.toFixed(2)),
      fechaCreacion || new Date()
    );
  }
}
