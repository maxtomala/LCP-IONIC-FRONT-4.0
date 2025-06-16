import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraficoSemanalLcComponent } from './grafico-semanal-lc.component';

describe('GraficoSemanalLcComponent', () => {
  let component: GraficoSemanalLcComponent;
  let fixture: ComponentFixture<GraficoSemanalLcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoSemanalLcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoSemanalLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
