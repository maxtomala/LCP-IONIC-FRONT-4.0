import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioInicialPage } from './formulario-inicial.page';

describe('FormularioInicialPage', () => {
  let component: FormularioInicialPage;
  let fixture: ComponentFixture<FormularioInicialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
