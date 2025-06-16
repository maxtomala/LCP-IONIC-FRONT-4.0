import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantesLcpPage } from './participantes-lcp.page';

describe('ParticipantesLcpPage', () => {
  let component: ParticipantesLcpPage;
  let fixture: ComponentFixture<ParticipantesLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
