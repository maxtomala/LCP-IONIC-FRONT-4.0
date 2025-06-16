import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELCPage } from './e-lc.page';

describe('ELCPage', () => {
  let component: ELCPage;
  let fixture: ComponentFixture<ELCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ELCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
