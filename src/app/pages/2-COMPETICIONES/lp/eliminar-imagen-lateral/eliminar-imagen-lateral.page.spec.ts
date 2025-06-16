import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarImagenLateralPage } from './eliminar-imagen-lateral.page';

describe('EliminarImagenLateralPage', () => {
  let component: EliminarImagenLateralPage;
  let fixture: ComponentFixture<EliminarImagenLateralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarImagenLateralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
