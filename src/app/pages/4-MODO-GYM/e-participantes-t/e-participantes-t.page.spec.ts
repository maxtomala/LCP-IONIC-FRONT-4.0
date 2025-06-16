import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EParticipantesTPage } from './e-participantes-t.page';

describe('EParticipantesTPage', () => {
  let component: EParticipantesTPage;
  let fixture: ComponentFixture<EParticipantesTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EParticipantesTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
