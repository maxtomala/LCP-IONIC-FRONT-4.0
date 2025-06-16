import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAjustesCuentaPage } from './menu-ajustes-cuenta.page';

describe('MenuAjustesCuentaPage', () => {
  let component: MenuAjustesCuentaPage;
  let fixture: ComponentFixture<MenuAjustesCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAjustesCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
