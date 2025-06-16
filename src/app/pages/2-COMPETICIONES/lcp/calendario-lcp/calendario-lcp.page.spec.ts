import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioLcpPage } from './calendario-lcp.page';

describe('CalendarioLcpPage', () => {
  let component: CalendarioLcpPage;
  let fixture: ComponentFixture<CalendarioLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
