import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Championship } from 'src/app/services/championships.service';
import { ChampionshipsService } from 'src/app/services/championships.service';
@Component({
  selector: 'app-championships',
  templateUrl: './championships.page.html',
  styleUrls: ['./championships.page.scss']
})
export class ChampionshipsPage implements OnInit {
  championships: Observable<Championship[]>;

  constructor(private championshipsService: ChampionshipsService) {}

  ngOnInit() {
    this.championships = this.championshipsService.getChampionships();
  }
}
