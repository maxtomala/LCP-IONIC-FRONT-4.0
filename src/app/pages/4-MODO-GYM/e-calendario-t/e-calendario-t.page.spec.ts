import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECalendarioTPage } from './e-calendario-t.page';

describe('ECalendarioTPage', () => {
  let component: ECalendarioTPage;
  let fixture: ComponentFixture<ECalendarioTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECalendarioTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
