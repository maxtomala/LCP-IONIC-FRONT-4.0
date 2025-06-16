import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuinipesoLcpPage } from './quinipeso-lcp.page';

describe('QuinipesoLcpPage', () => {
  let component: QuinipesoLcpPage;
  let fixture: ComponentFixture<QuinipesoLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinipesoLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
