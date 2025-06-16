import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilFormularioPage } from './perfil-formulario.page';

describe('PerfilFormularioPage', () => {
  let component: PerfilFormularioPage;
  let fixture: ComponentFixture<PerfilFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
