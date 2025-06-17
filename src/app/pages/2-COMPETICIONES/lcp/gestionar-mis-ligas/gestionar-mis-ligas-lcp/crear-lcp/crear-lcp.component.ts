import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public opcionQuiniela = ['activar', 'desactivar'];
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

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ligaCorporalProfesionalService: LigaCorporalProfesionalService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    this.ligaForm = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      pais: ['', Validators.required],
      genero: ['', Validators.required],
      quiniela: ['', Validators.required],
      tipoEnfrentamiento: ['', Validators.required],
    });

  }

  campoNoValido0(form: FormGroup, campo: string): boolean {
    const control = form.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  crearLiga(): void {
    if (this.ligaForm.invalid) {
      this.ligaForm.markAllAsTouched();
      return;
    }

    const formValues = this.ligaForm.value;

    const { uid } = this.usuarioService.usuario;

    this.ligaCorporalProfesionalService
      .crearLigaCorporalProfesional({ _id: uid, ...formValues })
      .subscribe({
        next: (resp) => {
          console.log('Liga creada:', resp);
          // Aquí podrías redirigir o mostrar un mensaje de éxito
        },
        error: (err) => {
          console.error('Error al crear la liga:', err);
        },
      });
  }
}
