import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EConsultarTorneosPage } from './e-consultar-torneos.page';

describe('EConsultarTorneosPage', () => {
  let component: EConsultarTorneosPage;
  let fixture: ComponentFixture<EConsultarTorneosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EConsultarTorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
