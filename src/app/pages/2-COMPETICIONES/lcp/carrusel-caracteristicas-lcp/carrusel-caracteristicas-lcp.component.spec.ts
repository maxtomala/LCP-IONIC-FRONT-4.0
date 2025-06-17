import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarruselCaracteristicasLcpComponent } from './carrusel-caracteristicas-lcp.component';

describe('CarruselCaracteristicasLcpComponent', () => {
  let component: CarruselCaracteristicasLcpComponent;
  let fixture: ComponentFixture<CarruselCaracteristicasLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselCaracteristicasLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselCaracteristicasLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
