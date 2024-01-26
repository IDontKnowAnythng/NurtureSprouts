import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadnewsPage } from './uploadnews.page';

describe('UploadnewsPage', () => {
  let component: UploadnewsPage;
  let fixture: ComponentFixture<UploadnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
