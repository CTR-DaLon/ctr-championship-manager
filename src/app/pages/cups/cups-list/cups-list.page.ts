import { Component, OnInit } from '@angular/core';
import { CupsService, Cup } from 'src/app/services/cups.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cups-list',
  templateUrl: './cups-list.page.html',
  styleUrls: ['./cups-list.page.scss']
})
export class CupsListPage implements OnInit {
  cups: Observable<Cup[]>;

  constructor(private cupService: CupsService) {}

  ngOnInit() {
    this.cups = this.cupService.getCups();
  }
}
