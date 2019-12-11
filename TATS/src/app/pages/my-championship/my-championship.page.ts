import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipsService, Championship } from 'src/app/services/championships.service';

@Component({
  selector: 'app-my-championship',
  templateUrl: './my-championship.page.html',
  styleUrls: ['./my-championship.page.scss'],
})
export class MyChampionshipPage implements OnInit {

    championship: Championship = {
        name: '',
        img: ''
    }
    constructor(private activatedRoute: ActivatedRoute, private championshipService: ChampionshipsService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.championshipService.getChampionship(id).subscribe(championship => {
                this.championship = championship;
            });
        }
    }

}
