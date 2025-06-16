import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EEstadoSolicitudCompeticionLcpPage } from './e-estado-solicitud-competicion-lcp.page';

describe('EEstadoSolicitudCompeticionLcpPage', () => {
  let component: EEstadoSolicitudCompeticionLcpPage;
  let fixture: ComponentFixture<EEstadoSolicitudCompeticionLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EEstadoSolicitudCompeticionLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
