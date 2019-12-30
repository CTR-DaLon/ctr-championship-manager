import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChampionshipsPage } from './championships.page';

describe('ChampionshipsPage', () => {
  let component: ChampionshipsPage;
  let fixture: ComponentFixture<ChampionshipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionshipsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
