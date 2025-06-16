import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-socio',
  templateUrl: './tarjeta-socio.component.html',
  styleUrls: ['./tarjeta-socio.component.scss'],
})
export class TarjetaSocioComponent  implements OnInit {


  usuario = {
      imagenUrl: 'assets/images/users/1.jpg', // o una imagen por defecto
  google: false, // asegúrate de incluir esto si usas [readonly]="usuario.google"
    nombre: 'Carlos',
    apellido1: 'Ramírez',
    genero: 'Masculino',
    pais: 'México',
    fechaNacimiento: new Date(1990, 6, 15), // Año, mes (0-indexed), día
    altura: 1.78,
    deporte: 'Fútbol',
    instagram: '@carlosfit',
    objetivo: 'Ganar masa muscular',
    pesoIdeal: 75,
    fraseCelebre: 'La disciplina supera al talento.'
  };
  public imgTemp: any = null;
  public imageUrl = 'assets/images/background/25.png';




  constructor() { }

  ngOnInit() {}

}
