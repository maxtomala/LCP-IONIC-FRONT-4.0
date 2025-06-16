import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EPublicidadPage } from './e-publicidad.page';

describe('EPublicidadPage', () => {
  let component: EPublicidadPage;
  let fixture: ComponentFixture<EPublicidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EPublicidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
