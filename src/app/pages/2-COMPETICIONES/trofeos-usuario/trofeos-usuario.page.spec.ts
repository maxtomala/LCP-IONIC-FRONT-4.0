import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrofeosUsuarioPage } from './trofeos-usuario.page';

describe('TrofeosUsuarioPage', () => {
  let component: TrofeosUsuarioPage;
  let fixture: ComponentFixture<TrofeosUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrofeosUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
