import { environment } from '../../environments/environment';

const base_url = environment.base_url;

export interface CalendarioLcp {
  jornadas: any;
  calendario: any;
  liga: string; // or you can use 'LigaCorporalProfesional' if you have a model for that
  emparejamientos: EmparejamientoLcp[];
  fechaInicio: Date;
  duracion?: number; // optional field
  semanaActual: number;

}

export interface EmparejamientoLcp {
  _id: string;
  ligaCorporalProfesional: string; // or you can use 'LigaCorporalProfesional' if you have a model for that
  participantes: Participante[];
  semana: number;
  tipo: string;
  registrosPeso: any[];

}

export interface Participante {
  _id: string;
  nombre: string;
  apellido1: string;
  img:string
  imgVerificadorLcp:string;
}
