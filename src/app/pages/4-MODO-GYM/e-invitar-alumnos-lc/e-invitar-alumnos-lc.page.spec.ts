import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EInvitarAlumnosLcPage } from './e-invitar-alumnos-lc.page';

describe('EInvitarAlumnosLcPage', () => {
  let component: EInvitarAlumnosLcPage;
  let fixture: ComponentFixture<EInvitarAlumnosLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EInvitarAlumnosLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
