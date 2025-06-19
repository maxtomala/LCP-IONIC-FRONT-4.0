import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaRegistroInicialLcpComponent } from './tabla-registro-inicial-lcp.component';

describe('TablaRegistroInicialLcpComponent', () => {
  let component: TablaRegistroInicialLcpComponent;
  let fixture: ComponentFixture<TablaRegistroInicialLcpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRegistroInicialLcpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaRegistroInicialLcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
