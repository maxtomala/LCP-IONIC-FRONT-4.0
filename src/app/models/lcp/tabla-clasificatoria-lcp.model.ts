import { LigaCorporalProfesional } from './liga-corporal-profesional.model';
import { Usuario } from '../usuario.model';

export class TablaClasificatoriaLcp {
  id?: string;
  liga: LigaCorporalProfesional | string;
  participante: Usuario | string;
  puntosTotales: number;
  puntos: number;
  victorias: number;
  empates: number;
  derrotas: number;
  pesoAnterior: number;
  pesoActual: number;
  diferencia?: number;
  posicion?: number;
  fechaActualizacion?: Date;
  afectadoPorQuinipeso: number;

  constructor(data: {
    liga: LigaCorporalProfesional | string;
    participante: Usuario | string;
    puntosTotales?: number;
    puntos?: number;
    victorias?: number;
    empates?: number;
    derrotas?: number;
    pesoAnterior?: number;
    pesoActual?: number;
    diferencia?: number;
    posicion?: number;
    fechaActualizacion?: Date;
    afectadoPorQuinipeso?: number;
    id?: string;
  }) {
    this.liga = data.liga;
    this.participante = data.participante;
    this.puntosTotales = data.puntosTotales ?? 0;
    this.puntos = data.puntos ?? 0;
    this.victorias = data.victorias ?? 0;
    this.empates = data.empates ?? 0;
    this.derrotas = data.derrotas ?? 0;
    this.pesoAnterior = data.pesoAnterior ?? 0;
    this.pesoActual = data.pesoActual ?? 0;
    this.diferencia = data.diferencia;
    this.posicion = data.posicion;
    this.fechaActualizacion = data.fechaActualizacion;
    this.afectadoPorQuinipeso = data.afectadoPorQuinipeso ?? 0;
    this.id = data.id;
  }
}
