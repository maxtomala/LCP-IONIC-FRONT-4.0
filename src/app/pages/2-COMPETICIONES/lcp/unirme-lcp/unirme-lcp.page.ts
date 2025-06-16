import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface Liga {
  _id: string;
  fechaCreacion: Date;
  nombre: string;
  objetivo: string;
  pais: string;
  genero: string;
  quiniela: string;
  grupo: string;
  tipoEnfrentamiento: string;
  numeroDeParticipantes: number;
}
@Component({
  selector: 'app-unirme-lcp',
  templateUrl: './unirme-lcp.page.html',
  styleUrls: ['./unirme-lcp.page.scss'],
})
export class UnirmeLcpPage implements OnInit {
  filterForm: FormGroup;
  minimizado = false;

  opcionObjetivo = ['Competitivo', 'Recreativo', 'Mixto'];
  paisesUnionEuropeaEEUU = ['España', 'Francia', 'Alemania', 'Italia', 'EEUU'];
  opcionGenero = ['Masculino', 'Femenino', 'Mixto'];
  opcionQuiniela = ['Sí', 'No'];
  tipoEnfrentamiento = ['Individual', 'Equipos', 'Mixto'];
  grupo = ['Grupo A', 'Grupo B', 'Grupo C'];


  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      nombre: [''],
      objetivo: [''],
      pais: [''],
      genero: [''],
      quiniela: [''],
      tipoEnfrentamiento: [''],
      grupo: [''],
    });
  }


  limpiarFiltros() {
    this.filterForm.reset();
  }

  toggleMinimizar() {
    this.minimizado = !this.minimizado;
  }

  buscar() {
    // Aquí puedes procesar los valores del formulario para filtrar o enviar la búsqueda
    const filtros = this.filterForm.value;
    console.log('Buscando con filtros:', filtros);
    // Ejecuta tu lógica de búsqueda aquí
  }







  ligaCorporalProfesional: Liga[] = [];
  totalLigaCorporalProfesional = 0;
  cargando = true;



  paginaActual = 0;
  paginaTamanio = 10;



  ngOnInit() {
    this.cargarLigas();
  }

  cargarLigas() {
    this.cargando = true;

    // Aquí simulas la llamada a API o servicio para cargar ligas paginadas.
    // En producción usarías un servicio que devuelva un Observable/Promise.
    setTimeout(() => {
      // Simulación de datos
      const datosSimulados: Liga[] = [];

      for (let i = 1; i <= 50; i++) {
        datosSimulados.push({
          _id: `liga-${i}`,
          fechaCreacion: new Date(2023, i % 12, i),
          nombre: `Liga ${i}`,
          objetivo: i % 2 === 0 ? 'Competitivo' : 'Recreativo',
          pais: ['España', 'Francia', 'Alemania', 'Italia', 'EEUU'][i % 5],
          genero: i % 3 === 0 ? 'Masculino' : 'Femenino',
          quiniela: i % 2 === 0 ? 'Sí' : 'No',
          grupo: `Grupo ${String.fromCharCode(65 + (i % 3))}`,
          tipoEnfrentamiento: 'Individual',
          numeroDeParticipantes: Math.floor(Math.random() * 10) + 1,
        });
      }

      this.totalLigaCorporalProfesional = datosSimulados.length;

      // Aplicar paginación simulada
      this.ligaCorporalProfesional = datosSimulados.slice(
        this.paginaActual,
        this.paginaActual + this.paginaTamanio
      );

      this.cargando = false;
    }, 800);
  }

  cambiarPagina(cambio: number) {
    const nuevoIndice = this.paginaActual + cambio;
    if (nuevoIndice < 0 || nuevoIndice >= this.totalLigaCorporalProfesional) {
      return; // No salir del rango
    }
    this.paginaActual = nuevoIndice;
    this.cargarLigas();
  }

  unirsePorGrupo(idLiga: string) {
    console.log('Unirse a la liga con id:', idLiga);
    // Aquí implementa la lógica para unirse al grupo de la liga
  }








}
