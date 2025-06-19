import { Usuario } from '../usuario.model';

export class LigaCorporalProfesional {
  constructor(
    public nombre: string,
    public objetivo: 'bajar de peso' | 'subir de peso',
    public pais: string,
    public genero: 'masculino' | 'femenino' | 'mixto',
    public tipoEnfrentamiento: 'solo de ida' | 'ida y vuelta',
    public estadoLcp: 'iniciada' | 'no iniciada' | 'finalizada',
    public quinipeso: 'activar' | 'desactivar',
    public grupo: 'abierto' | 'cerrado',
    public duracionSemanas?: number,
    public admin?: Usuario,
    public fechaCreacion?: Date,
    public participantes: Usuario[] = [],
    public edadMediaParticipantes?: number,
    public numeroDeParticipantes?: number,
    public imgGrupalLcp?: string,
    public enlaceInvitacion?: string,
    public _id?: string
  ) {}
}
