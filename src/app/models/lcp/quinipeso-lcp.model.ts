import { LigaCorporalProfesional } from './liga-corporal-profesional.model';
import { CalendarioLcp } from './calendario-lcp.model';
import { EmparejamientoLcp } from './emparejamiento-lcp.model';

export type EstadoQuinipeso = 'pendiente' | 'publicada' | 'cerrada';
export type ResultadoQuinipeso = '1' | 'x' | '2';
export type EstadoResuelta = 'ganada' | 'perdida' | 'pendiente';

export class QuinipesoLcp {
  id?: string;
  ligaCorporalProfesional: LigaCorporalProfesional | string;
  calendario: CalendarioLcp | string;
  jornada: number;
  emparejamientos: (EmparejamientoLcp | string)[];
  estado: EstadoQuinipeso;
  fechaCierre?: Date;
  fechaPublicacion?: Date;
  resultado?: ResultadoQuinipeso;
  resuelta: EstadoResuelta;

  constructor(data: {
    ligaCorporalProfesional: LigaCorporalProfesional | string;
    calendario: CalendarioLcp | string;
    jornada: number;
    emparejamientos: (EmparejamientoLcp | string)[];
    estado?: EstadoQuinipeso;
    fechaCierre?: Date;
    fechaPublicacion?: Date;
    resultado?: ResultadoQuinipeso;
    resuelta?: EstadoResuelta;
    id?: string;
  }) {
    this.ligaCorporalProfesional = data.ligaCorporalProfesional;
    this.calendario = data.calendario;
    this.jornada = data.jornada;
    this.emparejamientos = data.emparejamientos;
    this.estado = data.estado || 'pendiente';
    this.fechaCierre = data.fechaCierre;
    this.fechaPublicacion = data.fechaPublicacion;
    this.resultado = data.resultado;
    this.resuelta = data.resuelta || 'pendiente';
    this.id = data.id;
  }
}
