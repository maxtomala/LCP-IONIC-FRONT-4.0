import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EAceptarPesoLcPage } from './e-aceptar-peso-lc.page';

describe('EAceptarPesoLcPage', () => {
  let component: EAceptarPesoLcPage;
  let fixture: ComponentFixture<EAceptarPesoLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EAceptarPesoLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
