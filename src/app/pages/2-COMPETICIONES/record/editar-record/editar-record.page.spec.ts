import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarRecordPage } from './editar-record.page';

describe('EditarRecordPage', () => {
  let component: EditarRecordPage;
  let fixture: ComponentFixture<EditarRecordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
