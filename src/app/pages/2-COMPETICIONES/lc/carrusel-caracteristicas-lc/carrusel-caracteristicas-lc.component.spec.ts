import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarruselCaracteristicasLcComponent } from './carrusel-caracteristicas-lc.component';

describe('CarruselCaracteristicasLcComponent', () => {
  let component: CarruselCaracteristicasLcComponent;
  let fixture: ComponentFixture<CarruselCaracteristicasLcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselCaracteristicasLcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselCaracteristicasLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
