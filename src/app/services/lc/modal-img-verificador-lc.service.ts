import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImgVerificadorLcService {

  private _ocultarModal: boolean = true;
  public tipo: 'usuarios';
  public id: string;
  public imgVerificadorLc: string;

  // actualiza la img al momento q nosotros la cambiemos
  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();


  get ocultarModal() {
    return this._ocultarModal;
  }

  // al tener 3 argumento en el parametro tb lo necesitas en al clase ..un public
  abrirModal(
    tipo: 'usuarios',
    id: string,
    imgVerificadorLc: string = ''

  ) {

    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;

    if (!imgVerificadorLc) {
      this.imgVerificadorLc = `${base_url}/uploads/verificador-lc/${tipo}/no-img`;
    } else {
      this.imgVerificadorLc = `${base_url}/uploads/verificador-lc/${tipo}/${imgVerificadorLc}`;
    }

  }

  cerrarModal() {
    this._ocultarModal = true;
  }

  constructor() { }
}
