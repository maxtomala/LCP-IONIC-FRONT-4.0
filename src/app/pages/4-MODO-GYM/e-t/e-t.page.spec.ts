import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ETPage } from './e-t.page';

describe('ETPage', () => {
  let component: ETPage;
  let fixture: ComponentFixture<ETPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ETPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
