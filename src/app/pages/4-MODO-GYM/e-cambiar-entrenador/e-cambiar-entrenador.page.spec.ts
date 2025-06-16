import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECambiarEntrenadorPage } from './e-cambiar-entrenador.page';

describe('ECambiarEntrenadorPage', () => {
  let component: ECambiarEntrenadorPage;
  let fixture: ComponentFixture<ECambiarEntrenadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECambiarEntrenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
