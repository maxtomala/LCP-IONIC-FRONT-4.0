import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESolicitarCompeticionLcpPage } from './e-solicitar-competicion-lcp.page';

describe('ESolicitarCompeticionLcpPage', () => {
  let component: ESolicitarCompeticionLcpPage;
  let fixture: ComponentFixture<ESolicitarCompeticionLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ESolicitarCompeticionLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
