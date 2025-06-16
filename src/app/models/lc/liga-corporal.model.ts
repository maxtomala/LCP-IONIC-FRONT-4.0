import { Usuario } from '../usuario.model';

export class LigaCorporal {
  constructor(
    public nombre: string,
    public objetivo: string,
    public admin?: Usuario,
    public fechaCreacion: Date = new Date(),
    public participantes: Usuario[] = [],
    public imgGrupalLc?: string,
    public enlaceInvitacion?: string,
    public _id?: string
  ) {}
}
