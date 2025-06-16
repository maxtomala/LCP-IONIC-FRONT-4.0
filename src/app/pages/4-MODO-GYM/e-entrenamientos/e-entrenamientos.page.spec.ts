import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EEntrenamientosPage } from './e-entrenamientos.page';

describe('EEntrenamientosPage', () => {
  let component: EEntrenamientosPage;
  let fixture: ComponentFixture<EEntrenamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EEntrenamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
