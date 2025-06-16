import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-lcp',
  templateUrl: './editar-lcp.component.html',
  styleUrls: ['./editar-lcp.component.scss'],
})
export class EditarLcpComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
// editar-lcp.component.ts

  ligaCorporal = [
    {
      id: 1,
      nombre: 'Liga Ejemplo',
      objetivo: 'Competencia sana',
      pais: 'España',
      genero: 'mixto',
      tipoLiga: 'quiniela',
      modalidad: 'ida_vuelta',
      grupo: 'abierto',
      enlaceInvitacion: '',
      fechaCreacion: new Date()
    },
    // puedes añadir más objetos si deseas
  ];

  opcionesObjetivo = ['Diversión', 'Competencia', 'Entrenamiento'];
  paises = ['España', 'México', 'Argentina', 'Colombia'];

  eliminarLiga(liga: any): void {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la liga "${liga.nombre}"?`);
    if (!confirmacion) return;
    this.ligaCorporal = this.ligaCorporal.filter(item => item !== liga);
    console.log('Liga eliminada:', liga);
  }

  actualizarLiga(liga: any): void {
    // Aquí puedes enviar la liga al servidor para guardar cambios
    console.log('Actualizando liga:', liga);
  }

  generarEnlace(liga: any): void {
    const baseUrl = 'https://miapp.com/invitar/';
    liga.enlaceInvitacion = `${baseUrl}${liga.id}`;
    console.log('Enlace generado:', liga.enlaceInvitacion);
  }

  copyTextToClipboard(inputElement: any): void {
    inputElement.select();
    document.execCommand('copy');
    alert('Enlace copiado al portapapeles');
  }

  selectText(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.select();
  }
}
