import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionLcPage } from './configuracion-lc.page';

describe('ConfiguracionLcPage', () => {
  let component: ConfiguracionLcPage;
  let fixture: ComponentFixture<ConfiguracionLcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionLcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
