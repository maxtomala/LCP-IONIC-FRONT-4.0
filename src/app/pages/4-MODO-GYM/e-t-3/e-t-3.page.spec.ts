import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ET3Page } from './e-t-3.page';

describe('ET3Page', () => {
  let component: ET3Page;
  let fixture: ComponentFixture<ET3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ET3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
