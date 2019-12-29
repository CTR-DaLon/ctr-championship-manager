import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CupsListPage } from './cups-list.page';

describe('CupsListPage', () => {
  let component: CupsListPage;
  let fixture: ComponentFixture<CupsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CupsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
