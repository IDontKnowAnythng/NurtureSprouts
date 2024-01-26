import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifynewsPage } from './verifynews.page';

describe('VerifynewsPage', () => {
  let component: VerifynewsPage;
  let fixture: ComponentFixture<VerifynewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifynewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifynewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
