import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCompeticionPage } from './menu-competicion.page';

describe('MenuCompeticionPage', () => {
  let component: MenuCompeticionPage;
  let fixture: ComponentFixture<MenuCompeticionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompeticionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
