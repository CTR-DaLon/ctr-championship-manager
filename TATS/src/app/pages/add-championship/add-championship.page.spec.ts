import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddChampionshipPage } from './add-championship.page';

describe('AddChampionshipPage', () => {
  let component: AddChampionshipPage;
  let fixture: ComponentFixture<AddChampionshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChampionshipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddChampionshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
