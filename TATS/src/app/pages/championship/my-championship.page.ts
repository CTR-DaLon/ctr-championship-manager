import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionshipsService, Championship } from 'src/app/services/championships.service';
import { ToastService } from 'src/app/services/toast.service';

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
    constructor(private activatedRoute: ActivatedRoute, private championshipService: ChampionshipsService,
        private toastService: ToastService, private router: Router) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.championshipService.getChampionship(id).subscribe(championship => {
                this.championship = championship;
            });
        }
    }

    addChampionship() {
        this.championshipService.addChampionship(this.championship).then(() => {
            this.router.navigateByUrl('/');
            this.toastService.showToast('Championnat ajouté !');
        }, err => {
            this.toastService.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }

    deleteChampionship() {
        this.championshipService.deleteChampionship(this.championship.id).then(() => {
            this.router.navigateByUrl('/');
            this.toastService.showToast('Championnat supprimé !');
        }, err => {
            this.toastService.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }

    updateChampionship() {
        this.championshipService.updateChampionship(this.championship).then(() => {
            this.router.navigateByUrl('/');
            this.toastService.showToast('Championnat mis à jour !');
        }, err => {
            this.toastService.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }

}
