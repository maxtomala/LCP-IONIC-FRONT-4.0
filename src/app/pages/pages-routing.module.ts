import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    canActivate: [AuthGuard],  // <--- Añade esta línea
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./1-HOME/home/home.module').then(m => m.HomePageModule)
      },

      {
        path: 'lp',
        loadChildren: () => import('./2-COMPETICIONES/lp/lp.module').then( m => m.LpPageModule)
      },
      {
        path: 'lc',
        loadChildren: () => import('./2-COMPETICIONES/lc/lc.module').then( m => m.LcPageModule)
      },
      {
        path: 'lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/lcp.module').then( m => m.LcpPageModule)
      },
      {
        path: 'torneos',
        loadChildren: () => import('./2-COMPETICIONES/torneos/torneos.module').then( m => m.TorneosPageModule)
      },
      {
        path: 'e-lc',
        loadChildren: () => import('./4-MODO-GYM/e-lc/e-lc.module').then( m => m.ELCPageModule)
      },
      {
        path: 'e-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-lcp/e-lcp.module').then( m => m.ELCPPageModule)
      },
      {
        path: 'e-t',
        loadChildren: () => import('./4-MODO-GYM/e-t/e-t.module').then( m => m.ETPageModule)
      },
      {
        path: 'e-entrenamientos',
        loadChildren: () => import('./4-MODO-GYM/e-entrenamientos/e-entrenamientos.module').then( m => m.EEntrenamientosPageModule)
      },
      {
        path: 'e-crear-lc',
        loadChildren: () => import('./4-MODO-GYM/e-crear-lc/e-crear-lc.module').then( m => m.ECrearLcPageModule)
      },
      {
        path: 'e-crear-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-crear-lcp/e-crear-lcp.module').then( m => m.ECrearLcpPageModule)
      },
      {
        path: 'e-crear-t',
        loadChildren: () => import('./4-MODO-GYM/e-crear-t/e-crear-t.module').then( m => m.ECrearTPageModule)
      },
      {
        path: 'e-invitar-alumnos-lc',
        loadChildren: () => import('./4-MODO-GYM/e-invitar-alumnos-lc/e-invitar-alumnos-lc.module').then( m => m.EInvitarAlumnosLcPageModule)
      },
      {
        path: 'e-aceptar-peso-lc',
        loadChildren: () => import('./4-MODO-GYM/e-aceptar-peso-lc/e-aceptar-peso-lc.module').then( m => m.EAceptarPesoLcPageModule)
      },
      {
        path: 'e-lc-2',
        loadChildren: () => import('./4-MODO-GYM/e-lc-2/e-lc-2.module').then( m => m.ELc2PageModule)
      },
      {
        path: 'e-lcp-2',
        loadChildren: () => import('./4-MODO-GYM/e-lcp-2/e-lcp-2.module').then( m => m.ELcp2PageModule)
      },
      {
        path: 'e-t-2',
        loadChildren: () => import('./4-MODO-GYM/e-t-2/e-t-2.module').then( m => m.ET2PageModule)
      },
      {
        path: 'e-lcp-3',
        loadChildren: () => import('./4-MODO-GYM/e-lcp-3/e-lcp-3.module').then( m => m.ELcp3PageModule)
      },
      {
        path: 'e-aceptar-peso-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-aceptar-peso-lcp/e-aceptar-peso-lcp.module').then( m => m.EAceptarPesoLcpPageModule)
      },
      {
        path: 'e-calendario-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-calendario-lcp/e-calendario-lcp.module').then( m => m.ECalendarioLcpPageModule)
      },
      {
        path: 'e-quiniela-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-quiniela-lcp/e-quiniela-lcp.module').then( m => m.EQuinielaLcpPageModule)
      },
      {
        path: 'e-participantes-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-participantes-lcp/e-participantes-lcp.module').then( m => m.EParticipantesLcpPageModule)
      },
      {
        path: 'e-invitar-alumnos-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-invitar-alumnos-lcp/e-invitar-alumnos-lcp.module').then( m => m.EInvitarAlumnosLcpPageModule)
      },
      {
        path: 'e-invitar-entrenador-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-invitar-entrenador-lcp/e-invitar-entrenador-lcp.module').then( m => m.EInvitarEntrenadorLcpPageModule)
      },
      {
        path: 'e-registrar-peso-inicial-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-registrar-peso-inicial-lcp/e-registrar-peso-inicial-lcp.module').then( m => m.ERegistrarPesoInicialLcpPageModule)
      },
      {
        path: 'e-solicitar-competicion-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-solicitar-competicion-lcp/e-solicitar-competicion-lcp.module').then( m => m.ESolicitarCompeticionLcpPageModule)
      },
      {
        path: 'e-estado-solicitud-competicion-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-estado-solicitud-competicion-lcp/e-estado-solicitud-competicion-lcp.module').then( m => m.EEstadoSolicitudCompeticionLcpPageModule)
      },
      {
        path: 'e-buscador-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-buscador-lcp/e-buscador-lcp.module').then( m => m.EBuscadorLcpPageModule)
      },
      {
        path: 'trofeos-usuario',
        loadChildren: () => import('./2-COMPETICIONES/trofeos-usuario/trofeos-usuario.module').then( m => m.TrofeosUsuarioPageModule)
      },
      {
        path: 'trofeos-gimnasio',
        loadChildren: () => import('./4-MODO-GYM/trofeos-gimnasio/trofeos-gimnasio.module').then( m => m.TrofeosGimnasioPageModule)
      },
      {
        path: 'trofeos-gimnasio-mas-detalles',
        loadChildren: () => import('./4-MODO-GYM/trofeos-gimnasio-mas-detalles/trofeos-gimnasio-mas-detalles.module').then( m => m.TrofeosGimnasioMasDetallesPageModule)
      },
      {
        path: 'trofeos-conseguidos',
        loadChildren: () => import('./4-MODO-GYM/trofeos-conseguidos/trofeos-conseguidos.module').then( m => m.TrofeosConseguidosPageModule)
      },
      {
        path: 'e-aceptar-peso-t',
        loadChildren: () => import('./4-MODO-GYM/e-aceptar-peso-t/e-aceptar-peso-t.module').then( m => m.EAceptarPesoTPageModule)
      },
      {
        path: 'e-buscador-t',
        loadChildren: () => import('./4-MODO-GYM/e-buscador-t/e-buscador-t.module').then( m => m.EBuscadorTPageModule)
      },
      {
        path: 'e-calendario-t',
        loadChildren: () => import('./4-MODO-GYM/e-calendario-t/e-calendario-t.module').then( m => m.ECalendarioTPageModule)
      },
      {
        path: 'e-participantes-t',
        loadChildren: () => import('./4-MODO-GYM/e-participantes-t/e-participantes-t.module').then( m => m.EParticipantesTPageModule)
      },
      {
        path: 'e-estado-solicitud-competicion-t',
        loadChildren: () => import('./4-MODO-GYM/e-estado-solicitud-competicion-t/e-estado-solicitud-competicion-t.module').then( m => m.EEstadoSolicitudCompeticionTPageModule)
      },
      {
        path: 'e-participantes-lc',
        loadChildren: () => import('./4-MODO-GYM/e-participantes-lc/e-participantes-lc.module').then( m => m.EParticipantesLcPageModule)
      },
      {
        path: 'e-solicitar-competicion-t',
        loadChildren: () => import('./4-MODO-GYM/e-solicitar-competicion-t/e-solicitar-competicion-t.module').then( m => m.ESolicitarCompeticionTPageModule)
      },
      {
        path: 'e-quiniela-ganadores-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-quiniela-ganadores-lcp/e-quiniela-ganadores-lcp.module').then( m => m.EQuinielaGanadoresLcpPageModule)
      },
      {
        path: 'e-quiniela-usar-creditos-lcp',
        loadChildren: () => import('./4-MODO-GYM/e-quiniela-usar-creditos-lcp/e-quiniela-usar-creditos-lcp.module').then( m => m.EQuinielaUsarCreditosLcpPageModule)
      },
      {
        path: 'e-cambiar-entrenador',
        loadChildren: () => import('./4-MODO-GYM/e-cambiar-entrenador/e-cambiar-entrenador.module').then( m => m.ECambiarEntrenadorPageModule)
      },
      {
        path: 'e-consultar-torneos',
        loadChildren: () => import('./4-MODO-GYM/e-consultar-torneos/e-consultar-torneos.module').then( m => m.EConsultarTorneosPageModule)
      },
      {
        path: 'e-t-3',
        loadChildren: () => import('./4-MODO-GYM/e-t-3/e-t-3.module').then( m => m.ET3PageModule)
      },
      {
        path: 'chat-general',
        loadChildren: () => import('./3-CHATS/chat-general/chat-general.module').then( m => m.ChatGeneralPageModule)
      },
      {
        path: 'chat-particular',
        loadChildren: () => import('./3-CHATS/chat-particular/chat-particular.module').then( m => m.ChatParticularPageModule)
      },
      {
        path: 'e-publicidad',
        loadChildren: () => import('./4-MODO-GYM/e-publicidad/e-publicidad.module').then( m => m.EPublicidadPageModule)
      },
      {
        path: 'menu-competicion',
        loadChildren: () => import('./2-COMPETICIONES/menu-competicion/menu-competicion.module').then( m => m.MenuCompeticionPageModule)
      },
      {
        path: 'menu-gym',
        loadChildren: () => import('./4-MODO-GYM/menu-gym/menu-gym.module').then( m => m.MenuGymPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./5-PERFIL/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'menu-configuracion',
        loadChildren: () => import('./2-COMPETICIONES/menu-configuracion/menu-configuracion.module').then( m => m.MenuConfiguracionPageModule)
      },
      {
        path: 'configuracion-lp',
        loadChildren: () => import('./2-COMPETICIONES/lp/configuracion-lp/configuracion-lp.module').then( m => m.ConfiguracionLpPageModule)
      },
      {
        path: 'configuracion-lc',
        loadChildren: () => import('./2-COMPETICIONES/lc/configuracion-lc/configuracion-lc.module').then( m => m.ConfiguracionLcPageModule)
      },
      {
        path: 'configuracion-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/configuracion-lcp/configuracion-lcp.module').then( m => m.ConfiguracionLcpPageModule)
      },
      {
        path: 'configuracion-torneo',
        loadChildren: () => import('./2-COMPETICIONES/torneos/gestionar-mis-ligas/configuracion-torneo/configuracion-torneo.module').then( m => m.ConfiguracionTorneoPageModule)
      },
      {
        path: 'eliminar-imagen-frontal',
        loadChildren: () => import('./2-COMPETICIONES/lp/eliminar-imagen-frontal/eliminar-imagen-frontal.module').then( m => m.EliminarImagenFrontalPageModule)
      },
      {
        path: 'eliminar-imagen-lateral',
        loadChildren: () => import('./2-COMPETICIONES/lp/eliminar-imagen-lateral/eliminar-imagen-lateral.module').then( m => m.EliminarImagenLateralPageModule)
      },
      {
        path: 'perfil-formulario',
        loadChildren: () => import('./5-PERFIL/perfil-formulario/perfil-formulario.module').then( m => m.PerfilFormularioPageModule)
      },
      {
        path: 'unirme-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/unirme-lcp/unirme-lcp.module').then( m => m.UnirmeLcpPageModule)
      },
      {
        path: 'participantes-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/participantes-lcp/participantes-lcp.module').then( m => m.ParticipantesLcpPageModule)
      },
      {
        path: 'calendario-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/calendario-lcp/calendario-lcp.module').then( m => m.CalendarioLcpPageModule)
      },
      {
        path: 'quinipeso-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/quinipeso-lcp/quinipeso-lcp.module').then( m => m.QuinipesoLcpPageModule)
      },
      {
        path: 'usuarios-siguiendo',
        loadChildren: () => import('./1-HOME/home/usuarios-siguiendo/usuarios-siguiendo.module').then( m => m.UsuariosSiguiendoPageModule)
      },
      {
        path: 'usuarios-seguidores',
        loadChildren: () => import('./1-HOME/home/usuarios-seguidores/usuarios-seguidores.module').then( m => m.UsuariosSeguidoresPageModule)
      },
      {
      path: 'participantes-lc',
      loadChildren: () => import('./2-COMPETICIONES/lc/participantes-lc/participantes-lc.module').then( m => m.ParticipantesLcPageModule)
      },
      {
      path: 'record',
      loadChildren: () => import('./2-COMPETICIONES/record/record.module').then( m => m.RecordPageModule)
      },
      {
        path: 'editar-record',
        loadChildren: () => import('./2-COMPETICIONES/record/editar-record/editar-record.module').then( m => m.EditarRecordPageModule)
      },
      {
        path: 'menu-ajustes-cuenta',
        loadChildren: () => import('./6-CONF-CUENTA/menu-ajustes-cuenta/menu-ajustes-cuenta.module').then( m => m.MenuAjustesCuentaPageModule)
      },
      {
        path: 'notificacion',
        loadChildren: () => import('./6-CONF-CUENTA/notificacion/notificacion.module').then( m => m.NotificacionPageModule)
      },
      {
        path: 'ajustes-cuenta',
        loadChildren: () => import('./6-CONF-CUENTA/ajustes-cuenta/ajustes-cuenta.module').then( m => m.AjustesCuentaPageModule)
      },
      {
        path: 'gestionar-mis-ligas-lcp',
        loadChildren: () => import('./2-COMPETICIONES/lcp/gestionar-mis-ligas/gestionar-mis-ligas-lcp/gestionar-mis-ligas-lcp.module').then( m => m.GestionarMisLigasLcpPageModule)
      },
      {
        path: 'gestionar-mis-ligas-lp',
        loadChildren: () => import('./2-COMPETICIONES/lp/gestionar-mis-ligas/gestionar-mis-ligas-lp/gestionar-mis-ligas-lp.module').then( m => m.GestionarMisLigasLpPageModule)
      },
      {
        path: 'menu-gestionar-mis-ligas',
        loadChildren: () => import('./2-COMPETICIONES/menu-gestionar-mis-ligas/menu-gestionar-mis-ligas.module').then( m => m.MenuGestionarMisLigasPageModule)
      },
      {
        path: 'gestionar-mis-ligas-lc',
        loadChildren: () => import('./2-COMPETICIONES/lc/gestionar-mis-ligas/gestionar-mis-ligas-lc/gestionar-mis-ligas-lc.module').then( m => m.GestionarMisLigasLcPageModule)
      },


    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
