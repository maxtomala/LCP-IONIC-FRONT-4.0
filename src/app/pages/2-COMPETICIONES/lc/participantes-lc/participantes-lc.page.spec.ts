import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantesLcPage } from './participantes-lc.page';

describe('ParticipantesLcPage', () => {
  let component: ParticipantesLcPage;
  let fixture: ComponentFixture<ParticipantesLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
