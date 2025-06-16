import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificadorSemanalLcComponent } from './verificador-semanal-lc.component';

describe('VerificadorSemanalLcComponent', () => {
  let component: VerificadorSemanalLcComponent;
  let fixture: ComponentFixture<VerificadorSemanalLcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificadorSemanalLcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificadorSemanalLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
