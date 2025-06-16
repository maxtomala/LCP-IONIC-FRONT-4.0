import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECrearLcPage } from './e-crear-lc.page';

describe('ECrearLcPage', () => {
  let component: ECrearLcPage;
  let fixture: ComponentFixture<ECrearLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ECrearLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
