import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ERegistrarPesoInicialLcpPage } from './e-registrar-peso-inicial-lcp.page';

describe('ERegistrarPesoInicialLcpPage', () => {
  let component: ERegistrarPesoInicialLcpPage;
  let fixture: ComponentFixture<ERegistrarPesoInicialLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ERegistrarPesoInicialLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
