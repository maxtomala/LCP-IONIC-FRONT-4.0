import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-particular',
  templateUrl: './chat-particular.page.html',
  styleUrls: ['./chat-particular.page.scss'],
})
export class ChatParticularPage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  nuevoMensaje: string = ''; // Aquí se guarda lo que escribes
  mensajes: { texto: string; tipo: 'me' | 'otro' }[] = [];

 enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajes.push({ texto: this.nuevoMensaje, tipo: 'me' });
      this.nuevoMensaje = ''; // Limpia el input después de enviar
    }
  }

  adjuntarArchivo() {
    console.log('Adjuntar archivo');
  }

  abrirCamara() {
    console.log('Abrir cámara');
  }

}
