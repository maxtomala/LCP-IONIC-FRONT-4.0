import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESolicitarCompeticionTPage } from './e-solicitar-competicion-t.page';

describe('ESolicitarCompeticionTPage', () => {
  let component: ESolicitarCompeticionTPage;
  let fixture: ComponentFixture<ESolicitarCompeticionTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ESolicitarCompeticionTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
