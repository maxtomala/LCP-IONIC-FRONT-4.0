export interface _ligaCorporalProfesionalParticipantes {
  _id: string;
  nombre: string;
  pais: string;
  pesoIdeal: string;
  img: string;
  apellido1: string;
  apellido2: string;
  uid: string;
  imgVerificadorLcp:string;


}
export interface _ligaCorporalProfesionaladmin {
  _id: string,
  nombre: string;
  img: string;
}
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
    public duracion?: string,  //   días restantes…
    public fechaCreacion?: Date,
    public admin?: _ligaCorporalProfesionaladmin,
    public participantes?: _ligaCorporalProfesionalParticipantes[],
    public _id?: string,
    public edadMedia?: Number,
    public enlaceInvitacion?: string,
    public numeroDeParticipantes?:Number,
    public imgGrupalLcp?: string,



    ) {
     }

  }

