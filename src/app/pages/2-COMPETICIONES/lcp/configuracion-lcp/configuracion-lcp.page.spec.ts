import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionLcpPage } from './configuracion-lcp.page';

describe('ConfiguracionLcpPage', () => {
  let component: ConfiguracionLcpPage;
  let fixture: ComponentFixture<ConfiguracionLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
