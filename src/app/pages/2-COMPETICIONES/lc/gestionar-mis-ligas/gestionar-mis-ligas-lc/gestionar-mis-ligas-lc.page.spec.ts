import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarMisLigasLcPage } from './gestionar-mis-ligas-lc.page';

describe('GestionarMisLigasLcPage', () => {
  let component: GestionarMisLigasLcPage;
  let fixture: ComponentFixture<GestionarMisLigasLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarMisLigasLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
