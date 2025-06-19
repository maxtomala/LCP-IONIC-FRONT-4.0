import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardarPesoInicialLcpComponent } from './guardar-peso-inicial-lcp.component';

describe('GuardarPesoInicialLcpComponent', () => {
  let component: GuardarPesoInicialLcpComponent;
  let fixture: ComponentFixture<GuardarPesoInicialLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarPesoInicialLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardarPesoInicialLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
