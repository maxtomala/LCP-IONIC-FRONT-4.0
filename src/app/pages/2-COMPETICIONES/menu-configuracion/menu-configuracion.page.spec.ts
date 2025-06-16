import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuConfiguracionPage } from './menu-configuracion.page';

describe('MenuConfiguracionPage', () => {
  let component: MenuConfiguracionPage;
  let fixture: ComponentFixture<MenuConfiguracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
