import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CupDetailsPage } from './cup-details.page';

describe('CupDetailsPage', () => {
  let component: CupDetailsPage;
  let fixture: ComponentFixture<CupDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CupDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CupDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
