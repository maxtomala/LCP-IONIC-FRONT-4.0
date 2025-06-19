import { Usuario } from "../usuario.model";
import { LigaCorporalProfesional } from "./liga-corporal-profesional.model";

export class RegistroPesoLcp {
  constructor(
    public ligaCorporalProfesional: LigaCorporalProfesional | string,
    public participante: Usuario | string,
    public pesoKg: number,
    public pesoLb: number,
    public jornada: number,
    public anio: number,
    public fechaCreacion: Date = new Date(),
    public _id?: string
  ) {}
}
