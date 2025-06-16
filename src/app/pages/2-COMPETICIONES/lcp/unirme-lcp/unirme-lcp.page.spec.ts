import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnirmeLcpPage } from './unirme-lcp.page';

describe('UnirmeLcpPage', () => {
  let component: UnirmeLcpPage;
  let fixture: ComponentFixture<UnirmeLcpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirmeLcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
