
import { Usuario } from '../usuario.model';
import { CalendarioLcp } from './calendario-lcp.model';
import { LigaCorporalProfesional } from './liga-corporal-profesional.model';
import { RegistroPesoLcp } from './registro-peso-lcp.model';

export type ResultadoEmparejamiento = 'ganador1' | 'empate' | 'ganador2' | 'Pendiente';

export class EmparejamientoLcp {
  constructor(
    public ligaCorporalProfesional: LigaCorporalProfesional | string,
    public calendario: CalendarioLcp | string,
    public jornada: number,
    public participanteA: Usuario | string,
    public participanteB: Usuario | string,
    public resultado: ResultadoEmparejamiento = 'Pendiente',
    public registrosPeso: (RegistroPesoLcp | string)[] = [],
    public puntosParticipanteA: number = 0,
    public puntosParticipanteB: number = 0,
    public inasistenciaParticipanteA: boolean = false,
    public inasistenciaParticipanteB: boolean = false,
    public _id?: string
  ) {}

  // Puedes agregar métodos si los necesitas, por ejemplo:
  // método para verificar si el emparejamiento está completo (resultado distinto a pendiente)
  public estaCompleto(): boolean {
    return this.resultado !== 'Pendiente';
  }
}
