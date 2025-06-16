import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuGestionarMisLigasPage } from './menu-gestionar-mis-ligas.page';

describe('MenuGestionarMisLigasPage', () => {
  let component: MenuGestionarMisLigasPage;
  let fixture: ComponentFixture<MenuGestionarMisLigasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGestionarMisLigasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
