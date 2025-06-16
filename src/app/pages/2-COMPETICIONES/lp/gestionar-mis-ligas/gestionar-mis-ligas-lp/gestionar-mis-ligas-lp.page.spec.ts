import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarMisLigasLpPage } from './gestionar-mis-ligas-lp.page';

describe('GestionarMisLigasLpPage', () => {
  let component: GestionarMisLigasLpPage;
  let fixture: ComponentFixture<GestionarMisLigasLpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarMisLigasLpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
