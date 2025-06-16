import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECrearLcpPage } from './e-crear-lcp.page';

describe('ECrearLcpPage', () => {
  let component: ECrearLcpPage;
  let fixture: ComponentFixture<ECrearLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECrearLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
