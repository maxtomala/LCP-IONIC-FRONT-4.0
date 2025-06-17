import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalProfesionalService } from 'src/app/services/lcp/liga-corporal-profesional.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-lcp',
  templateUrl: './crear-lcp.component.html',
  styleUrls: ['./crear-lcp.component.scss'],
})
export class CrearLcpComponent implements OnInit {

  public usuario: Usuario;
  public ligaForm!: FormGroup;
  public opcionesObjetivo = ['bajar de peso', 'subir de peso'];
  public opcionesGenero = ['masculino', 'femenino', 'mixto'];
  public opcionQuinpeso = ['activar', 'desactivar'];
  public tipoEnfrentamiento = ['solo de ida', 'ida y vuelta'];
  public paisesUnionEuropeaEEUU = [
    'Afganistán',
    'Albania',
    'Alemania',
    'Andorra',
    'Angola',
    'Antigua y Barbuda',
    'Arabia Saudita',
    'Argelia',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaiyán',
    'Bahamas',
    'Bahréin',
    'Bangladesh',
    'Barbados',
    'Belarús (Bielorrusia)',
    'Bélgica',
    'Belice',
    'Benín',
    'Bután',
    'Bolivia',
    'Bosnia y Herzegovina',
    'Botsuana',
    'Brasil',
    'Brunéi',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Camboya',
    'Camerún',
    'Canadá',
    'Catar',
    'Chad',
    'Chile',
    'China',
    'Chipre',
    'Colombia',
    'Comoras',
    'Corea del Norte',
    'Corea del Sur',
    'Costa de Marfil',
    'Costa Rica',
    'Croacia',
    'Cuba',
    'Dinamarca',
    'Dominica',
    'Ecuador',
    'Egipto',
    'El Salvador',
    'Emiratos Árabes Unidos',
    'Eritrea',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estados Unidos',
    'Estonia',
    'Eswatini (Suazilandia)',
    'Etiopía',
    'Fiyi',
    'Filipinas',
    'Finlandia',
    'Francia',
    'Gabón',
    'Gambia',
    'Georgia',
    'Ghana',
    'Granada',
    'Grecia',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guinea Ecuatorial',
    'Guyana',
    'Haití',
    'Honduras',
    'Hungría',
    'India',
    'Indonesia',
    'Irak',
    'Irán',
    'Irlanda',
    'Islandia',
    'Islas Marshall',
    'Islas Salomón',
    'Israel',
    'Italia',
    'Jamaica',
    'Japón',
    'Jordania',
    'Kazajistán',
    'Kenia',
    'Kirguistán',
    'Kiribati',
    'Kuwait',
    'Laos',
    'Lesoto',
    'Letonia',
    'Líbano',
    'Liberia',
    'Libia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Macedonia del Norte',
    'Madagascar',
    'Malasia',
    'Malaui',
    'Maldivas',
    'Malí',
    'Malta',
    'Marruecos',
    'Mauricio',
    'Mauritania',
    'México',
    'Micronesia',
    'Moldavia',
    'Mónaco',
    'Mongolia',
    'Montenegro',
    'Mozambique',
    'Myanmar (Birmania)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Nicaragua',
    'Níger',
    'Nigeria',
    'Noruega',
    'Nueva Zelanda',
    'Omán',
    'Países Bajos',
    'Pakistán',
    'Palaos',
    'Panamá',
    'Papúa Nueva Guinea',
    'Paraguay',
    'Perú',
    'Polonia',
    'Portugal',
    'Reino Unido',
    'República Centroafricana',
    'República Checa',
    'República del Congo',
    'República Democrática del Congo',
    'República Dominicana',
    'Ruanda',
    'Rumania',
    'Rusia',
    'San Cristóbal y Nieves',
    'Samoa',
    'San Marino',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Santo Tomé y Príncipe',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leona',
    'Singapur',
    'Siria',
    'Somalia',
    'Sri Lanka',
    'Suazilandia (Eswatini)',
    'Sudáfrica',
    'Sudán',
    'Sudán del Sur',
    'Suecia',
    'Suiza',
    'Surinam',
    'Tailandia',
    'Tanzania',
    'Tayikistán',
    'Timor Oriental',
    'Togo',
    'Tonga',
    'Trinidad y Tobago',
    'Túnez',
    'Turkmenistán',
    'Turquía',
    'Tuvalu',
    'Ucrania',
    'Uganda',
    'Uruguay',
    'Uzbekistán',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Yibuti',
    'Zambia',
    'Zimbabue',
  ];
  public cargando = false;
  public errorMensaje = '';
  public exitoMensaje = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ligaCorporalProfesionalService: LigaCorporalProfesionalService,
        private toastController: ToastController,

  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    this.ligaForm = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      pais: ['', Validators.required],
      genero: ['', Validators.required],
      quinipeso: ['', Validators.required],  // nombre corregido de quiniela a quinipeso
      tipoEnfrentamiento: ['', Validators.required],
      grupo: ['cerrado', Validators.required], // asumo que quieres el grupo
      duracionSemanas: [null, [Validators.min(1)]], // opcional, mínimo 1 semana
      enlaceInvitacion: [''], // opcional
      imgGrupalLcp: [''], // opcional
    });

  }

campoNoValido0(campo: string): boolean {
  const control = this.ligaForm.get(campo);
  return (control?.invalid && control?.touched) || false;
}


crearLiga(): void {
  if (this.ligaForm.invalid) {
    this.ligaForm.markAllAsTouched();
    return;
  }

  this.cargando = true;
  this.errorMensaje = '';
  this.exitoMensaje = '';

  const data = {
    ...this.ligaForm.value,
    participantes: [this.usuario.uid], // solo participantes en el body
  };

  console.log('Datos que se enviarán:', data);

   this.ligaCorporalProfesionalService
      .crearLigaCorporalProfesional(data, this.usuario.uid)
      .subscribe({
        next: async (liga) => {
          await this.presentToast('Liga creada con éxito ✅');
          this.cargando = false;
          this.ligaForm.reset({
            grupo: 'cerrado',
          });
        },
        error: async (err) => {
          await this.presentToast(
            err.error?.mensaje || 'Error al crear la liga ❌. Intente más tarde.'
          );
          this.cargando = false;
        },
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
}
