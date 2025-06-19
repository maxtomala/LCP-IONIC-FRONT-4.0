import { Usuario } from '../usuario.model';
import { LigaCorporalProfesional } from './liga-corporal-profesional.model';

export class CreditoLcp {
  constructor(
    public participante: Usuario | string,
    public ligaCorporalProfesional: LigaCorporalProfesional | string,
    public motivo: string = "Ganó quinpeso", 
    public fecha: Date = new Date(),
    public cantidad: number = 1,
    public jornada?: number,
    public activo: boolean = true,
    public usado: boolean = false,
    public _id?: string
  ) {}
}
