import { Usuario } from '../usuario.model';

export class RegistroPesoLp {
  constructor(
    public _id?: string,
    public usuario?: Usuario,
    public fechaCreacion?: Date,
    public pesoKg?: number,
    public pesoLb?: number
  ) {}

  // Métodos estáticos para conversión
  static kgToLb(kg: number): number {
    return kg * 2.20462;
  }

  static lbToKg(lb: number): number {
    return lb * 0.453592;
  }

  // Método para asignar peso con conversión automática
  setPeso(peso: number, unidad: string): void {
    const unidadLower = unidad.toLowerCase();
    if (unidadLower === 'kg') {
      this.pesoKg = Number(peso.toFixed(2));
      this.pesoLb = Number(RegistroPesoLp.kgToLb(peso).toFixed(2));
    } else if (unidadLower === 'lb') {
      this.pesoLb = Number(peso.toFixed(2));
      this.pesoKg = Number(RegistroPesoLp.lbToKg(peso).toFixed(2));
    } else {
      throw new Error('Unidad no válida, debe ser "kg" o "lb"');
    }
  }
}
