import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EParticipantesLcpPage } from './e-participantes-lcp.page';

describe('EParticipantesLcpPage', () => {
  let component: EParticipantesLcpPage;
  let fixture: ComponentFixture<EParticipantesLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EParticipantesLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
