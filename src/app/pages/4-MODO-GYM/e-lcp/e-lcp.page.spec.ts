import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELCPPage } from './e-lcp.page';

describe('ELCPPage', () => {
  let component: ELCPPage;
  let fixture: ComponentFixture<ELCPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ELCPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
