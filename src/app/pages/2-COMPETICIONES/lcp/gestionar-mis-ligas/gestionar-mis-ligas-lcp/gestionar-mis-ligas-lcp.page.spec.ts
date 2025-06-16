import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarMisLigasLcpPage } from './gestionar-mis-ligas-lcp.page';

describe('GestionarMisLigasLcpPage', () => {
  let component: GestionarMisLigasLcpPage;
  let fixture: ComponentFixture<GestionarMisLigasLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarMisLigasLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
