import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECrearTPage } from './e-crear-t.page';

describe('ECrearTPage', () => {
  let component: ECrearTPage;
  let fixture: ComponentFixture<ECrearTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECrearTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
