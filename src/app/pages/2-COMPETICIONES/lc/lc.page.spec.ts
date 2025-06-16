import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LcPage } from './lc.page';

describe('LcPage', () => {
  let component: LcPage;
  let fixture: ComponentFixture<LcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
