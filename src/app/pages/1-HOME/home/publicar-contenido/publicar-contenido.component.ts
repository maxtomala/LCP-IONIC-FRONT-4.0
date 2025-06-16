import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-publicar-contenido',
  templateUrl: './publicar-contenido.component.html',
  styleUrls: ['./publicar-contenido.component.scss'],
})
export class PublicarContenidoComponent  implements OnInit {
  ngOnInit(): void {
    console.log('Publicando...');
  }
  @Input() modal!: HTMLIonModalElement;

texto: string = '';
  constructor(private modalController: ModalController) {}

publicar() {
    if (!this.texto.trim()) {
      alert('Escribe algo primero.');
      return;
    }
    console.log('Publicación:', this.texto);
    this.modalController.dismiss(); // Cierra el modal después de publicar
    this.texto = '';
  }

  abrirGaleria() {
    alert('Abrir galería...');
  }

  cerrar() {
    this.modalController.dismiss();
  }
}
