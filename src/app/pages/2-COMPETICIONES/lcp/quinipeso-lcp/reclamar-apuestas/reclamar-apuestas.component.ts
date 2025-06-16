import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reclamar-apuestas',
  templateUrl: './reclamar-apuestas.component.html',
  styleUrls: ['./reclamar-apuestas.component.scss'],
})
export class ReclamarApuestasComponent  implements OnInit {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}

 jornadas: number[] = [];
  jornadaActualReclamarCreditos: number | null = null;

  constructor(private alertController: AlertController) {
    this.generarJornadas();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  generarJornadas(): void {
    // Simula 10 jornadas, puedes ajustar este número según tu lógica
    this.jornadas = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  async reclamarQuinielasPorCreditos(): Promise<void> {
    if (this.jornadaActualReclamarCreditos === null) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor selecciona una jornada.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Aquí iría tu lógica para reclamar el premio
    const alert = await this.alertController.create({
      header: '¡Premio Reclamado!',
      message: `Has reclamado tu premio de la jornada ${this.jornadaActualReclamarCreditos}.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
