import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-perfil-formulario',
  templateUrl: './perfil-formulario.page.html',
  styleUrls: ['./perfil-formulario.page.scss'],
})
export class PerfilFormularioPage implements OnInit {
  @ViewChild('content', { static: false }) content: IonContent; // me hace scroll automaticamente arrriba

  public usuario: Usuario;
  public perfilPaso0: FormGroup;
  public perfilPaso1: FormGroup;
  public perfilPaso2: FormGroup;
  public unidadElegida: string;

  // la opcion de objetivo
  public opcionObjetivo = ['Bajar de peso', 'Subir de peso'];
  public opcionGenero = ['Masculino', 'Femenino', 'Mixto'];

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
    private navCtrl: NavController,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuario?.unidad; // Evita que unidad sea undefined

    // Paso 0
    this.perfilPaso0 = this.fb.group({
      apellido1: [
        this.usuario?.apellido1 || '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      apellido2: [
        this.usuario?.apellido2 || '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      genero: [this.usuario?.genero || '', Validators.required],
      fechaNacimiento: [
        this.usuario?.fechaNacimiento || '',
        Validators.required,
      ],
      codigoPostal: [
        this.usuario?.codigoPostal || '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
    });
    // Paso 1
    this.perfilPaso1 = this.fb.group({
      pesoIdeal: [
        this.obtenerPesoIdealInicial(),
        [Validators.required, Validators.min(15), Validators.max(150)],
      ],
      altura: [
        this.usuario?.altura || '',
        [Validators.required, Validators.min(0.5), Validators.max(2.5)],
      ],
      objetivo: [
        this.usuario?.objetivo || this.opcionObjetivo[0],
        Validators.required,
      ],

      pais: [this.usuario?.pais || '', Validators.required],
    });
    // Paso 2
    this.perfilPaso2 = this.fb.group({
      instagram: [this.usuario?.instagram || ''],
      deporte: [this.usuario?.deporte || ''],
      profesion: [this.usuario?.profesion || ''],
      fraseCelebre: [
        this.usuario?.fraseCelebre || '',
        [Validators.maxLength(120)],
      ],
    });
  }

  campoNoValido0(campo: string): boolean {
    const control = this.perfilPaso0.get(campo);
    return control?.invalid && control?.touched;
  }

  guardarPaso0() {
    if (this.perfilPaso0.invalid) {
      this.perfilPaso0.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email } = this.usuarioService.usuario;

    const datos = {
      role,
      nombre,
      email,
      ...this.perfilPaso0.value,
    };

    console.log('[actualizarPerfil] Datos enviados:', datos);

    this.usuarioService.actualizarUsuario(uid, datos).subscribe({
      next: () => {
        console.log('Perfil actualizado correctamente');
        // Opcional: actualizar datos locales del usuario
        this.usuario = { ...this.usuario, ...datos };
        this.step++; // ir al siguiente paso
        this.scrollToTop(); // 🔁 AQUÍ es seguro hacerlo
      },
      error: (err) => console.error('Error al actualizar perfil', err),
    });
  }

  campoNoValido1(campo: string): boolean {
    const control = this.perfilPaso1?.get(campo);
    return control?.invalid && control?.touched;
  }
  guardarPaso1() {
    if (this.perfilPaso1.invalid) {
      this.perfilPaso1.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email } = this.usuarioService.usuario;
    const peso = this.perfilPaso1.value.pesoIdeal;

    const { pesoIdeal, ...restoPerfil } = this.perfilPaso1.value;

    const usuario = new Usuario(
      nombre,
      email,
      role,
      restoPerfil.altura
      // ... puedes pasar otros campos si lo deseas
    );

    try {
      usuario.setPesoIdeal(peso, this.unidadElegida); // 👈 usa tu método del modelo
    } catch (error) {
      console.warn('Error al asignar peso ideal:', error);
    }

    const datos: any = {
      role,
      nombre,
      email,
      ...restoPerfil,
      pesoIdealKg: usuario.pesoIdealKg,
      pesoIdealLb: usuario.pesoIdealLb,
      unidad: usuario.unidad,
    };

    console.log('[guardarPaso1] Datos enviados:', datos);

    this.usuarioService.actualizarUsuario(uid, datos).subscribe({
      next: () => {
        this.usuario = { ...this.usuario, ...datos };
        this.step++; // avanzar al siguiente paso
      },
      error: (err) => console.error('Error al guardar paso 1', err),
    });
  }

  campoNoValido2(campo: string): boolean {
    const control = this.perfilPaso2?.get(campo);
    return control?.invalid && control?.touched;
  }

  public botonBloqueado = false;

  guardarPaso2() {
    if (this.perfilPaso2.invalid) {
      this.perfilPaso2.markAllAsTouched();
      return;
    }

    const { uid, role, nombre, email } = this.usuarioService.usuario;
    const datos = {
      role,
      nombre,
      email,
      ...this.perfilPaso2.value,
    };

    console.log('[guardarPaso2] Datos enviados:', datos);

    this.usuarioService.actualizarUsuario(uid, datos).subscribe({
      next: () => {
        this.usuario = { ...this.usuario, ...datos };
        this.activarBrilloBoton();
        // Bloquea el botón justo al pulsar
        this.botonBloqueado = true;
        setTimeout(() => {
          this.botonBloqueado = false;
        }, 3000);
      },
      error: (err) => console.error('Error al guardar paso 2', err),
    });
  }

  botonBrillando = false;

  activarBrilloBoton() {
    this.botonBrillando = true;
    setTimeout(() => {
      this.botonBrillando = false;
    }, 1500); // 3 veces 0.5s = 1.5s, dura el efecto y luego lo quita
  }

  step = 0;

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 0) this.step--;
  }

  volver() {
    this.navCtrl.back();
  }

  // me hace scroll automaticamente arrriba
  scrollToTop() {
    this.content.scrollToTop(400); // 400ms de animación
  }

  // obtenerPesoIdealInicial en el imput del form
  obtenerPesoIdealInicial(): number | null {
    if (!this.usuario) return null;

    const unidad = this.unidadElegida?.toLowerCase();
    if (unidad === 'kg') return this.usuario.pesoIdealKg ?? null;
    if (unidad === 'lb') return this.usuario.pesoIdealLb ?? null;

    return null;
  }
}
