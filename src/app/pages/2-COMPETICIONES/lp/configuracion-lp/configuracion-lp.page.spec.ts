import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionLpPage } from './configuracion-lp.page';

describe('ConfiguracionLpPage', () => {
  let component: ConfiguracionLpPage;
  let fixture: ComponentFixture<ConfiguracionLpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionLpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
