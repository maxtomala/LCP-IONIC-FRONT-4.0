import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECalendarioLcpPage } from './e-calendario-lcp.page';

describe('ECalendarioLcpPage', () => {
  let component: ECalendarioLcpPage;
  let fixture: ComponentFixture<ECalendarioLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECalendarioLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
