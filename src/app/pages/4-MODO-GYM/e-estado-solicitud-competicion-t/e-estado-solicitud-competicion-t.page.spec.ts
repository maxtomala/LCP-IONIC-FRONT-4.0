import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EEstadoSolicitudCompeticionTPage } from './e-estado-solicitud-competicion-t.page';

describe('EEstadoSolicitudCompeticionTPage', () => {
  let component: EEstadoSolicitudCompeticionTPage;
  let fixture: ComponentFixture<EEstadoSolicitudCompeticionTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EEstadoSolicitudCompeticionTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
