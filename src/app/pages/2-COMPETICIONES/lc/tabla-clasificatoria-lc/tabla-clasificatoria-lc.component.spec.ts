import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaClasificatoriaLcComponent } from './tabla-clasificatoria-lc.component';

describe('TablaClasificatoriaLcComponent', () => {
  let component: TablaClasificatoriaLcComponent;
  let fixture: ComponentFixture<TablaClasificatoriaLcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaClasificatoriaLcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaClasificatoriaLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
