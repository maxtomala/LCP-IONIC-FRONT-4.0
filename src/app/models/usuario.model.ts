
export class Usuario {

  constructor(

    // arribas las obligatorias, y las? son opcionales abajo
    public nombre: string,            //1
    public email: string,             //2
    public password?: string,         //3
    public role?: string,             //4

    //atributos ordenados a-z abajo   //5
    public altura?: number,           //6
    public apellido1?: string,        //7
    public apellido2?: string,        //8
    public codigoPostal?: number,     //9
    public fechaNacimiento?: Date,    //10
    public fechaRegistro?: Date,      //11

    public fraseCelebre?: string,     //12
    public genero?: string,           //13
    public instagram?: string,        //14
    public ligaC?: string,            //15
    public ligaCP?: string,           //16
    public objetivo?: string,         //17

    public pais?: string,             //18
    public profesion?: string,        //19
    public telefono?: number,         //20
    public deporte?: string,          //21
    // otros
    public totalCreditos?: number,    //22
    public pesoIdealKg?: number,      //23
    public pesoIdealLb?: number,      //24
    public unidad?: string,           //25
    public biografia?: string,           //26

    //atributos nuevos
    public img?: string,              //27
    public imgPortada?: string,       //28
    public imgVerificadorLc?: string, //29
    public imgVerificadorLcp?: string,//30
    public google?: boolean,          //31
    public uid?: string,              //32

    // cada vez  de añadir una variable añdir al validarToken(): de USBConfiguration.service.ts
  ) {
  }

  // para la img se crea pipes:img,imgVerificadorLc,imgVerificadorLcp...


  // Métodos estáticos para conversión
  static kgToLb(kg: number): number {
    return kg * 2.20462;
  }

  static lbToKg(lb: number): number {
    return lb * 0.453592;
  }

  // Método para asignar peso ideal con conversión automática
  setPesoIdeal(peso: number, unidad: string) {
    const unidadLower = unidad.toLowerCase();

    if (unidadLower === 'kg') {
      this.pesoIdealKg = Number(peso.toFixed(2));
      this.pesoIdealLb = Number(Usuario.kgToLb(peso).toFixed(2));
      this.unidad = 'kg';
    } else if (unidadLower === 'lb') {
      this.pesoIdealLb = Number(peso.toFixed(2));
      this.pesoIdealKg = Number(Usuario.lbToKg(peso).toFixed(2));
      this.unidad = 'lb';
    } else {
      throw new Error('Unidad no válida, debe ser "kg" o "lb"');
    }
  }








}
