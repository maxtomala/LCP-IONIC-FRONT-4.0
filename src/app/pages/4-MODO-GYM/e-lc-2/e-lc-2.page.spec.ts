import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELc2Page } from './e-lc-2.page';

describe('ELc2Page', () => {
  let component: ELc2Page;
  let fixture: ComponentFixture<ELc2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ELc2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
