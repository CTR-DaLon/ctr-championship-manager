import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyChampionshipPage } from './my-championship.page';

describe('MyChampionshipPage', () => {
  let component: MyChampionshipPage;
  let fixture: ComponentFixture<MyChampionshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyChampionshipPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyChampionshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
