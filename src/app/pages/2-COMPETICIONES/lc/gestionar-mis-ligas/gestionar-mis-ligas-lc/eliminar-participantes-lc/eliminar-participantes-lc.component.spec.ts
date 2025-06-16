import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarParticipantesLcComponent } from './eliminar-participantes-lc.component';

describe('EliminarParticipantesLcComponent', () => {
  let component: EliminarParticipantesLcComponent;
  let fixture: ComponentFixture<EliminarParticipantesLcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarParticipantesLcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarParticipantesLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
