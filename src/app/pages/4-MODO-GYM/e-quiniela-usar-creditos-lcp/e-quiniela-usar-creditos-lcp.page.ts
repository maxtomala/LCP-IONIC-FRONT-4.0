import { Component,  } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-e-quiniela-usar-creditos-lcp',
  templateUrl: './e-quiniela-usar-creditos-lcp.page.html',
  styleUrls: ['./e-quiniela-usar-creditos-lcp.page.scss'],
})
export class EQuinielaUsarCreditosLcpPage  {
accionBoton(arg0: string) {
throw new Error('Method not implemented.');
}
jugadores = [
  { nombre: 'Juan Pérez', pais: 'México', img: '/assets/perfil/2.jpg' },
  { nombre: 'Ana Gómez', pais: 'España', img: '/assets/perfil/6.jpg' },
  { nombre: 'Carlos López', pais: 'Argentina', img: '/assets/perfil/7.jpg' },
  { nombre: 'María Torres', pais: 'Colombia', img: '/assets/perfil/2.jpg' },
  { nombre: 'Luis Martínez', pais: 'Chile', img: '/assets/perfil/d6.png' },
];

constructor(private alertController: AlertController) {}


// posiblemente poner un modal ya que el alert no te deja colocar una img pero en el model si 
  async confirmarPenalizacion(jugador: any) {
    const alert = await this.alertController.create({
      header: '¡Atención!',
      cssClass: 'custom-alert',  // Añadimos una clase CSS personalizada

      message: `
        <div style="text-align: center;">
          <img
            src="${jugador.img}"
            style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 15px;"
            alt="imagen de ${jugador.nombre}"
          />
          <p>¿Está seguro de que desea restar 1 punto a <strong>${jugador.nombre}</strong>?</p>
        </div>
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.restarPunto(jugador);
          }
        }
      ]
    });
    await alert.present();
  }

  restarPunto(jugador: any) {
    console.log(`Punto restado a ${jugador.nombre}`);
    // Implementa aquí la lógica de penalización
  }
}
