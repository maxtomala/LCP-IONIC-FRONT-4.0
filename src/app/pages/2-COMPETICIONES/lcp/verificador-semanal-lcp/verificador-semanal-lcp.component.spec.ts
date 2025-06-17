import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificadorSemanalLcpComponent } from './verificador-semanal-lcp.component';

describe('VerificadorSemanalLcpComponent', () => {
  let component: VerificadorSemanalLcpComponent;
  let fixture: ComponentFixture<VerificadorSemanalLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificadorSemanalLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificadorSemanalLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
