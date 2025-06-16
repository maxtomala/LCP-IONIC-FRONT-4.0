import {  Component } from '@angular/core';



@Component({
  selector: 'app-e-entrenamientos',
  templateUrl: './e-entrenamientos.page.html',
  styleUrls: ['./e-entrenamientos.page.scss'],
})
export class EEntrenamientosPage  {

  onSubmit() {
    throw new Error('Method not implemented.');
    }

      progressValue: number = 0;

      constructor() { }


      updateProgress() {
        // Simular un progreso (aumentar el valor de la barra)
        setInterval(() => {
          if (this.progressValue < 1) {
            this.progressValue += 0.1;
          }
        }, 1000);
      }

}
