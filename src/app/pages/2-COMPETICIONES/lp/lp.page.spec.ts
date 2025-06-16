import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LpPage } from './lp.page';

describe('LpPage', () => {
  let component: LpPage;
  let fixture: ComponentFixture<LpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
