import { EmparejamientoLcp } from './emparejamiento-lcp.model';
import { QuinipesoLcp } from './quinipeso-lcp.model';
import { CalendarioLcp } from './calendario-lcp.model';
import { Usuario } from '../usuario.model';
import { LigaCorporalProfesional } from './liga-corporal-profesional.model';
import { CreditoLcp } from './credito-lcp.model';

export type EstadoPlantilla = 'pendiente' | 'completada';
export type EstadoResuelta = 'ganada' | 'perdida' | 'pendiente';

export interface Prediccion {
  emparejamiento: EmparejamientoLcp | string;
  pronostico: 'ganador1' | 'empate' | 'ganador2';
}

export class PlantillasQuinipesoLcp {
  id?: string;
  predicciones: Prediccion[];
  quinipesoLcp: QuinipesoLcp | string;
  calendario: CalendarioLcp | string;
  jornada: number;
  participante: Usuario | string;
  LigaCorporalProfesional: LigaCorporalProfesional | string;
  fechaCreacion: Date;
  estado: EstadoPlantilla;
  credito?: CreditoLcp | string | null;
  resuelta: EstadoResuelta;

  constructor(data: {
    predicciones: Prediccion[];
    quinipesoLcp: QuinipesoLcp | string;
    calendario: CalendarioLcp | string;
    jornada: number;
    participante: Usuario | string;
    LigaCorporalProfesional: LigaCorporalProfesional | string;
    fechaCreacion?: Date;
    estado?: EstadoPlantilla;
    credito?: CreditoLcp | string | null;
    resuelta?: EstadoResuelta;
    id?: string;
  }) {
    this.predicciones = data.predicciones;
    this.quinipesoLcp = data.quinipesoLcp;
    this.calendario = data.calendario;
    this.jornada = data.jornada;
    this.participante = data.participante;
    this.LigaCorporalProfesional = data.LigaCorporalProfesional;
    this.fechaCreacion = data.fechaCreacion || new Date();
    this.estado = data.estado || 'pendiente';
    this.credito = data.credito ?? null;
    this.resuelta = data.resuelta || 'pendiente';
    this.id = data.id;
  }
}
