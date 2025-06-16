import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionTorneoPage } from './configuracion-torneo.page';

describe('ConfiguracionTorneoPage', () => {
  let component: ConfiguracionTorneoPage;
  let fixture: ComponentFixture<ConfiguracionTorneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
