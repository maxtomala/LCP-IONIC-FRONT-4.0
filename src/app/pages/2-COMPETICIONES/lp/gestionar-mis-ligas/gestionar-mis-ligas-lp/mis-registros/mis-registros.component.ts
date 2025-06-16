import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroPesoLpService } from 'src/app/services/lp/registro-peso-lp.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-registros',
  templateUrl: './mis-registros.component.html',
  styleUrls: ['./mis-registros.component.scss'],
})
export class MisRegistrosComponent implements OnInit {
  public usuario: Usuario;

  page: number = 1;
  totalPages: number = 1;
  loading = false;
  public unidadElegida: string = 'kg';

  datosPorMes: {
    nombre: string;
    registros: any[];
    total: string;
    tendencia: string;
  }[] = [];

  colores: string[] = [
    '#5499C7', // azul cielo suave
    '#F5B041', // naranja dorado suave
    '#58D68D', // verde menta suave
    '#9B59B6', // morado lavanda
    '#EC7063', // rojo coral suave
  ];

  constructor(
    private registroPesoLpService: RegistroPesoLpService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.unidadElegida = this.usuario?.unidad?.toLowerCase() || 'kg';
    this.cargarHistorial();
  }
  getTendenciaFlecha(tendencia: string): string {
    if (tendencia === 'Subió') return '⬆️';
    if (tendencia === 'Bajó') return '🔻';
    return '➖';
  }

  cargarHistorial() {
    this.loading = true;
    const uid = this.usuarioService.uid;

    this.registroPesoLpService
      .getHistorialConDiferencias(uid, this.page)
      .subscribe((res) => {
this.datosPorMes = res.datosPorMes.map(mes => ({
  ...mes,
  registros: mes.registros.map(reg => ({
    ...reg,
    peso: this.unidadElegida === 'lb' ? (reg.peso * 2.20462).toFixed(2) : reg.peso,
    dif: reg.dif !== null && this.unidadElegida === 'lb' ? (reg.dif * 2.20462).toFixed(2) : reg.dif,
  })),
  total: this.unidadElegida === 'lb' ? (parseFloat(mes.total) * 2.20462).toFixed(2) : mes.total
}));
        this.totalPages = res.totalPages;
        this.page = res.page;
        this.loading = false;

        console.log('Historial:', this.datosPorMes);
      });
  }

  siguientePagina() {
    if (this.page < this.totalPages) {
      this.page++;
      this.cargarHistorial();
    }
  }

  paginaAnterior() {
    if (this.page > 1) {
      this.page--;
      this.cargarHistorial();
    }
  }

  obtenerColor(index: number): string {
    return this.colores[index % this.colores.length];
  }
}
