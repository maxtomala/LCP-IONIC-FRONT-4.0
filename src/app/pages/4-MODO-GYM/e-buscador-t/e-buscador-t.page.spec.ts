import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EBuscadorTPage } from './e-buscador-t.page';

describe('EBuscadorTPage', () => {
  let component: EBuscadorTPage;
  let fixture: ComponentFixture<EBuscadorTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EBuscadorTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
