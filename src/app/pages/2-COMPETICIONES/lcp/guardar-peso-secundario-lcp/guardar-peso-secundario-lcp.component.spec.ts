import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardarPesoSecundarioLcpComponent } from './guardar-peso-secundario-lcp.component';

describe('GuardarPesoSecundarioLcpComponent', () => {
  let component: GuardarPesoSecundarioLcpComponent;
  let fixture: ComponentFixture<GuardarPesoSecundarioLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarPesoSecundarioLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardarPesoSecundarioLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
