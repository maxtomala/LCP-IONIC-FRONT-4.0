import { environment } from '../../environments/environment';

const base_url = environment.base_url;

export interface _Usuario {
pesoSemanal: any;
peso: any;
   nombre: string,
   email: string,
   password?: string,
   img?: string,
   imgVerificadorLc?: string,
   imgVerificadorLcp?:string;
   role?: string,
   google?: boolean,
   uid?: string,
   _id: string,

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


export class RegistroPesoLcp{
nombre: any;
genero: any;
pais: any;
fechaNacimiento: string|number|Date;
altura: any;
instagram: any;
objetivo: any;
fraseCelebre: any;
imgVerificadorLcp:string;
apellido1: any;
email: any;
apellido2: any;
deporte: any;



  constructor(
    public _id?: string,
    public participante?: _Usuario,
    public peso?: number,
    public fecha?: Date,
    public imgVerificador?: string,
    public img?: string,
    public pesoSemanal?: number


  ) {}

//   get imagenUrlVerificador() {
//     // /lcVerificador/usuarios/no-image

//     if (!this.imgVerificador) {
//       return `${base_url}/lcVerificador/usuarios/verificador1`;
//     } else if (this.imgVerificador.includes('https')) {
//       return this.imgVerificador;
//     } else if (this.imgVerificador) {
//       return `${base_url}/lcVerificador/usuarios/${this.imgVerificador}`;
//     } else {
//       return `${base_url}/lcVerificador/usuarios/verificador1`;
//     }
//   }


//   get imagenUrl() {

//     if ( !this.img ) {
//         return `${ base_url }/upload/usuarios/no-image`;
//     } else if ( this.img.includes('https') ) {
//         return this.img;
//     } else if ( this.img ) {
//         return `${ base_url }/upload/usuarios/${ this.img }`;
//     } else {
//         return `${ base_url }/upload/usuarios/no-image`;
//     }
// }



}

