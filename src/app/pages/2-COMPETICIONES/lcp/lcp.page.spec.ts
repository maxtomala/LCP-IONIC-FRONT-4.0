import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LcpPage } from './lcp.page';

describe('LcpPage', () => {
  let component: LcpPage;
  let fixture: ComponentFixture<LcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
