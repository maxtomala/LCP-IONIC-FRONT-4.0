import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarImagenFrontalPage } from './eliminar-imagen-frontal.page';

describe('EliminarImagenFrontalPage', () => {
  let component: EliminarImagenFrontalPage;
  let fixture: ComponentFixture<EliminarImagenFrontalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarImagenFrontalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
