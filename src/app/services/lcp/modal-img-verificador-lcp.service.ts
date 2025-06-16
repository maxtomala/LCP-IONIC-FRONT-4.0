import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImgVerificadorLcpService {

  private _ocultarModal: boolean = true;
  public tipo: 'usuarios';
  public id: string;
  public imgVerificadorLcp: string;

  // actualiza la img al momento q nosotros la cambiemos
  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();


  get ocultarModal() {
    return this._ocultarModal;
  }

  // al tener 3 argumento en el parametro tb lo necesitas en al clase ..un public
  abrirModal(tipo: 'usuarios', id: string, imgVerificadorLcp: string = '') {
    console.log('abrirModal en ModalImgVerificadorLcpService llamado con:', { tipo, id, imgVerificadorLcp });
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;

    if (!imgVerificadorLcp) {
      this.imgVerificadorLcp = `${base_url}/uploads/verificador-lcp/${tipo}/no-img`;
      console.log('No hay imagen verificador LCP, usando imagen por defecto:', this.imgVerificadorLcp);
    } else {
      this.imgVerificadorLcp = `${base_url}/uploads/verificador-lcp/${tipo}/${imgVerificadorLcp}`;
      console.log('Imagen verificador LCP asignada:', this.imgVerificadorLcp);
    }
  }

  cerrarModal() {
    console.log('cerrarModal llamado');
    this._ocultarModal = true;
  }

  constructor() { }
}
