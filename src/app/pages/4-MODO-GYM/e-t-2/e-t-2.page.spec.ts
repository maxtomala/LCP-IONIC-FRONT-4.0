import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ET2Page } from './e-t-2.page';

describe('ET2Page', () => {
  let component: ET2Page;
  let fixture: ComponentFixture<ET2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ET2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
