import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrofeosGimnasioPage } from './trofeos-gimnasio.page';

describe('TrofeosGimnasioPage', () => {
  let component: TrofeosGimnasioPage;
  let fixture: ComponentFixture<TrofeosGimnasioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrofeosGimnasioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
