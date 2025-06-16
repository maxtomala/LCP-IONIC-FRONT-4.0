import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosSiguiendoPage } from './usuarios-siguiendo.page';

describe('UsuariosSiguiendoPage', () => {
  let component: UsuariosSiguiendoPage;
  let fixture: ComponentFixture<UsuariosSiguiendoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosSiguiendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
