// interfaces: son como ɵsetClassDebugInfo, pero tiene ciertas
// restricciones y puede forzar a un objeto que teenga cierta forma
// no tiene una version de javascript, no traduce  a nada

export interface RegisterForm {
  nombre: string;
  email: string;
  password: string;
  password2: string;
  terminos: boolean;
}
