import { LigaCorporalProfesional } from './liga-corporal-profesional.model';
import { EmparejamientoLcp } from './emparejamiento-lcp.model';

export type EstadoCalendario = 'pendiente' | 'en curso' | 'finalizada';

export class CalendarioLcp {
  constructor(
    public liga: LigaCorporalProfesional | string,
    public fechaInicio: Date,
    public fechaFinal: Date,
    public jornadaActual?: number,
    public totalJornadas?: number,
    public estado: EstadoCalendario = 'pendiente',
    public emparejamientos: (EmparejamientoLcp | string)[] = [],
    public _id?: string
  ) {}
}
