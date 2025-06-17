import { Usuario } from '../usuario.model';

export class LigaCorporalProfesional {
  constructor(
    public nombre: string,
    public objetivo: string,
    public pais: string,
    public genero: string,
    public tipoEnfrentamiento: string,
    public estadoLcp: string,
    public quiniela: string,
    public grupo: string,
    public duracion?: string, //   días restantes…
    public admin?: Usuario,
    public fechaCreacion?: Date,
    public participantes: Usuario[] = [],
    public edadMedia?: Number,
    public numeroDeParticipantes?: Number,
    public imgGrupalLcp?: string,
    public enlaceInvitacion?: string,
    public _id?: string
  ) {}
}

