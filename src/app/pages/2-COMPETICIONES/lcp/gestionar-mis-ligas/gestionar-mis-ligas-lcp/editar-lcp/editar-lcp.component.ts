import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario.service';
import { IonInput, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporalProfesionalService } from 'src/app/services/lcp/liga-corporal-profesional.service';
import { LigaCorporalProfesional } from 'src/app/models/lcp/liga-corporal-profesional.model';
@Component({
  selector: 'app-editar-lcp',
  templateUrl: './editar-lcp.component.html',
  styleUrls: ['./editar-lcp.component.scss'],
})
export class EditarLcpComponent implements OnInit {
  public ligaCorporalProfesional: LigaCorporalProfesional[] = []; // ✅ Aquí va la lista que usas con *ngFor
  public usuario: Usuario;
  public ligaForm!: FormGroup;
  public opcionesObjetivo = ['bajar de peso', 'subir de peso'];
  public opcionesGenero = ['masculino', 'femenino', 'mixto'];
  public OpcoinestipoEnfrentamiento = ['solo de ida', 'ida y vuelta'];
  public opcionQuinpeso = ['activar', 'desactivar'];
  public opcionesGrupo = ['abierto', 'cerrado'];
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
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    if (!this.usuario || !this.usuario.uid) {
      console.error('Usuario no está definido en EditarLcpComponent');
    }
    this.obtenerTodasLasLigasPorIdUsuario();
  }

  obtenerTodasLasLigasPorIdUsuario(): void {
    const { uid } = this.usuarioService.usuario;
    console.log('UID del usuario:', uid); // ✅ Para comprobar

    this.cargando = true;
    this.errorMensaje = '';
    this.exitoMensaje = '';

    this.ligaCorporalProfesionalService
      .obtenerTodasLasLigasPorIdUsuario(uid)
      .subscribe({
        next: (ligas) => {
          console.log('Ligas recibidas:', ligas); // ✅ Para comprobar
          this.ligaCorporalProfesional = ligas;
          this.cargando = false;

          if (ligas.length === 0) {
            this.errorMensaje = 'No se encontraron ligas.';
          } else {
            this.exitoMensaje = `Se cargaron ${ligas.length} ligas correctamente.`;
          }
        },
        error: (err) => {
          console.error('Error al cargar ligas:', err);
          this.errorMensaje = 'Error al cargar ligas. Intente de nuevo.';
          this.cargando = false;
        },
      });
  }

  async eliminarLiga(_id: string) {
    this.ligaCorporalProfesionalService
      .eliminarLigaCorporalProfesional(_id)
      .subscribe({
        next: async (res) => {
          // Mostrar toast de éxito
          const toast = await this.toastController.create({
            message: 'Liga eliminada correctamente',
            duration: 2000,
            color: 'success',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();

          // Actualizar la lista después de eliminar
          this.obtenerTodasLasLigasPorIdUsuario();
        },
        error: async (err) => {
          // Mostrar toast de error
          const toast = await this.toastController.create({
            message: 'Error al eliminar la liga',
            duration: 2000,
            color: 'danger',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();
          console.error('Error al eliminar la liga', err);
        },
      });
  }

  actualizarLiga(liga: LigaCorporalProfesional): void {
    this.ligaCorporalProfesionalService
      .actualizarLiga(liga._id!, {
        nombre: liga.nombre,
        objetivo: liga.objetivo,
        pais: liga.pais,
        genero: liga.genero,
        tipoEnfrentamiento: liga.tipoEnfrentamiento,
        quinipeso: liga.quinipeso,
        grupo: liga.grupo,
      })
      .subscribe({
        next: async (resp) => {
          console.log('Liga actualizada con éxito:', resp);
          await this.presentarToast('Liga actualizada con éxito', 'success');
          this.obtenerTodasLasLigasPorIdUsuario();
        },
        error: async (err) => {
          console.error('Error actualizando la liga:', err);
          await this.presentarToast('Error actualizando la liga', 'danger');
        },
      });
  }

  async presentarToast(
    mensaje: string,
    color: 'success' | 'danger' = 'success'
  ) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color,
      position: 'bottom',
      cssClass: 'toast-mensaje-centro',
    });
    toast.present();
  }

  generarEnlaceInvitacion(idLiga: string) {
    const idUsuarioInvitado = this.usuarioService.usuario.uid;

    this.ligaCorporalProfesionalService
      .generarEnlaceInvitacion(idLiga, idUsuarioInvitado)
      .subscribe({
        next: async (res) => {
          console.log('Enlace de invitación generado:', res);

          const toast = await this.toastController.create({
            message: 'Enlace de invitación generado correctamente.',
            duration: 2000,
            color: 'success',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();
          this.obtenerTodasLasLigasPorIdUsuario();
        },
        error: async (err) => {
          console.error('Error al generar el enlace de invitación', err);

          const toast = await this.toastController.create({
            message: 'Error al generar el enlace de invitación.',
            duration: 2000,
            color: 'danger',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();
        },
      });
  }
  //  copia el texo del imput
  async copyTextToClipboard(ionInput: IonInput) {
    const input = await ionInput.getInputElement();
    const value = input.value ?? '';

    try {
      await navigator.clipboard.writeText(value);
      console.log('Texto copiado al portapapeles:', value);
      const toast = await this.toastController.create({
        message: 'Texto copiado al portapapeles.',
        duration: 2000,
        color: 'success',
        position: 'bottom',
      });
      await toast.present();
    } catch (err) {
      console.error('Error al copiar texto:', err);
      const toast = await this.toastController.create({
        message: 'Error al copiar texto.',
        duration: 2000,
        color: 'danger',
        position: 'bottom',
        cssClass: 'toast-mensaje-centro',
      });
      await toast.present();
    }
  }

  //  selecciona todo el texto para que el usuario pueda copia
  selectText(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.select();
  }

  // Subir imagen grupal
  onFileSelected(event: any, liga: LigaCorporalProfesional): void {
    const file: File = event.target.files[0];
    if (!file) {
      return;
    }

    this.ligaCorporalProfesionalService
      .actualizarImagenGrupal(liga._id!, this.usuario.uid, file)
      .subscribe({
        next: async (resp: any) => {
          console.log('Imagen actualizada correctamente', resp);
          // Actualizamos la propiedad para forzar recarga de la imagen
          liga.imgGrupalLcp =
            resp.path.split('/').pop() + '?t=' + new Date().getTime();

          // Mostrar Toast de éxito
          const toast = await this.toastController.create({
            message: 'Imagen actualizada correctamente ✅',
            duration: 2000,
            color: 'success',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();
        },
        error: async (err) => {
          console.error('Error al actualizar imagen:', err);
          // Mostrar Toast de error
          const toast = await this.toastController.create({
            message: 'Error al actualizar la imagen ❌',
            duration: 2000,
            color: 'danger',
            position: 'bottom',
            cssClass: 'toast-mensaje-centro',
          });
          await toast.present();
        },
      });
  }
}
