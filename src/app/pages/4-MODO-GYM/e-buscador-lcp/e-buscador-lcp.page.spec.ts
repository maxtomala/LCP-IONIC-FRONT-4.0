import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EBuscadorLcpPage } from './e-buscador-lcp.page';

describe('EBuscadorLcpPage', () => {
  let component: EBuscadorLcpPage;
  let fixture: ComponentFixture<EBuscadorLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EBuscadorLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
