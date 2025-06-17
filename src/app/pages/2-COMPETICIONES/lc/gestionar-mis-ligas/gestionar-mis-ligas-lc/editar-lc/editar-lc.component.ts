import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LigaCorporalService } from 'src/app/services/lc/liga-corporal.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, IonInput, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';
@Component({
  selector: 'app-editar-lc',
  templateUrl: './editar-lc.component.html',
  styleUrls: ['./editar-lc.component.scss'],
})
export class EditarLcComponent implements OnInit {
  public ligaForm!: FormGroup;
  public opcionesObjetivo = ['bajar de peso', 'subir de peso'];
  public idLiga!: string;
  public imagenLigaUrl: string | null = null;

  public usuario: Usuario;
  public ligaCorporal: LigaCorporal[] = []; // ✅ Aquí va la lista que usas con *ngFor

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ligaCorporalService: LigaCorporalService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private toastController: ToastController

  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    // this.idLiga = this.route.snapshot.paramMap.get('id')!;

    this.ligaForm = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
    });

    this.obtenerTodasLasLigas();
  }

  obtenerTodasLasLigas(): void {
    const { uid } = this.usuarioService.usuario;
    this.ligaCorporalService.obtenerTodasLasLigasPorIdUsuario(uid).subscribe({
      next: (ligas) => {
        this.ligaCorporal = ligas;

        // Opcional: Si deseas cargar una específica en el formulario
        const liga = ligas.find((l) => l._id === this.idLiga);
        if (liga) {
          this.ligaForm.patchValue({
            nombre: liga.nombre,
            objetivo: liga.objetivo,
          });
        }
      },
      error: (err) => {
        console.error('Error al cargar ligas:', err);
      },
    });
  }

  actualizarLiga(liga: LigaCorporal): void {
    const { _id, nombre, objetivo } = liga;

    if (!nombre || !objetivo) return;

    this.ligaCorporalService.actualizarLiga(_id, nombre, objetivo).subscribe({
      next: async () => {
        const toast = await this.toastCtrl.create({
          message: 'Liga actualizada correctamente',
          duration: 2000,
          color: 'success',
        });
        toast.present();
      },
      error: async (err) => {
        console.error('Error al actualizar liga:', err);
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'No se pudo actualizar la liga',
          buttons: ['OK'],
        });
        alert.present();
      },
    });
  }

  eliminarLiga(liga: LigaCorporal): void {
    this.ligaCorporalService.eliminarLiga(liga._id).subscribe({
      next: async () => {
        this.ligaCorporal = this.ligaCorporal.filter((l) => l._id !== liga._id);
        const toast = await this.toastCtrl.create({
          message: 'Liga eliminada',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      },
      error: (err) => {
        console.error('Error al eliminar liga:', err);
      },
    });
  }

  generarEnlace(liga: LigaCorporal): void {
    const idUsuarioInvitado = this.usuarioService.usuario.uid;

    this.ligaCorporalService
      .generarEnlaceInvitacion(liga._id, idUsuarioInvitado)
      .subscribe({
        next: (resp) => {
          // Crea un nuevo objeto con el nuevo enlace
          liga.enlaceInvitacion = resp.enlace;
          this.obtenerTodasLasLigas();
        },
        error: (err) => {
          console.error('Error al generar enlace:', err);
        },
      });
  }


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
      position: 'bottom'
    });
    await toast.present();
  } catch (err) {
    console.error('Error al copiar texto:', err);
    const toast = await this.toastController.create({
      message: 'Error al copiar texto.',
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    await toast.present();
  }
}

  selectText(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.select();
  }

  campoNoValido0(form: FormGroup, campo: string): boolean {
    const control = form.get(campo);
    return (control?.invalid && control?.touched) || false;
  }

  // Subir imagen grupal
  onFileSelected(event: any, liga: LigaCorporal): void {
    const file: File = event.target.files[0];
    if (file) {
      this.ligaCorporalService
        .actualizarImagenGrupal(liga._id, this.usuario.uid, file)
        .subscribe({
          next: (resp: any) => {
            console.log('Imagen actualizada correctamente');
            liga.imgGrupalLc =
              resp.path.split('/').pop() + '?t=' + new Date().getTime();
          },
          error: (err) => {
            console.error('Error al actualizar imagen:', err);
          },
        });
    }
  }
}
