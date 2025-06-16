import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuGymPage } from './menu-gym.page';

describe('MenuGymPage', () => {
  let component: MenuGymPage;
  let fixture: ComponentFixture<MenuGymPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
