import { Usuario } from "../models/usuario.model";

export interface CargarUsuario {
  total: number;
  usuarios: _Usuario[];

}

export interface _Usuario {
  nombre: string,
  email: string,
  password?: string,
  img?: string,
  imgVerificadorLc?: string,
  imgVerificadorLp?: string,
  role?: string,
  google?: boolean,
  uid?: string,
 //atributos nuevos ordenados a-z abajo
  altura?: number,
  apellido1?: string,
  apellido2?: string,
  codigoPostal?: number,
  fechaNacimiento?: Date,
  fechaRegistro?: Date,
  fraseCelebre?: string,
  genero?: string,
  instagram?: string,
  ligaC?: string,
  ligaCP?: string,
  objetivo?: string,
  pais?: string,
  pesoIdeal?: number,
  profesion?: string,
  telefono?: number,

}
