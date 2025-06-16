import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarParticipantesLcpComponent } from './eliminar-participantes-lcp.component';

describe('EliminarParticipantesLcpComponent', () => {
  let component: EliminarParticipantesLcpComponent;
  let fixture: ComponentFixture<EliminarParticipantesLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarParticipantesLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarParticipantesLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
