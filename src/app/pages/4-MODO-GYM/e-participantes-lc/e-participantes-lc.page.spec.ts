import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EParticipantesLcPage } from './e-participantes-lc.page';

describe('EParticipantesLcPage', () => {
  let component: EParticipantesLcPage;
  let fixture: ComponentFixture<EParticipantesLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EParticipantesLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
