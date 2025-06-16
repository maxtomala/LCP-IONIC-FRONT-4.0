import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EInvitarAlumnosLcpPage } from './e-invitar-alumnos-lcp.page';

describe('EInvitarAlumnosLcpPage', () => {
  let component: EInvitarAlumnosLcpPage;
  let fixture: ComponentFixture<EInvitarAlumnosLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EInvitarAlumnosLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
