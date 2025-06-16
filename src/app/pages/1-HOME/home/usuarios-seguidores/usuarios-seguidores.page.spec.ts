import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosSeguidoresPage } from './usuarios-seguidores.page';

describe('UsuariosSeguidoresPage', () => {
  let component: UsuariosSeguidoresPage;
  let fixture: ComponentFixture<UsuariosSeguidoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosSeguidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
