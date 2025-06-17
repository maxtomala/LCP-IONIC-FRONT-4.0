import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaClasificatoriaLcpComponent } from './tabla-clasificatoria-lcp.component';

describe('TablaClasificatoriaLcpComponent', () => {
  let component: TablaClasificatoriaLcpComponent;
  let fixture: ComponentFixture<TablaClasificatoriaLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaClasificatoriaLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaClasificatoriaLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
