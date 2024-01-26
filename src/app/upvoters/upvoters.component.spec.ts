import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpvotersComponent } from './upvoters.component';

describe('UpvotersComponent', () => {
  let component: UpvotersComponent;
  let fixture: ComponentFixture<UpvotersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvotersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpvotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
