import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionshipsService, Championship } from 'src/app/services/championships.service';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-my-championship',
  templateUrl: './my-championship.page.html',
  styleUrls: ['./my-championship.page.scss'],
})
export class MyChampionshipPage implements OnInit {

    championship: Championship = {
        name: ''
    }
    constructor(private activatedRoute: ActivatedRoute, private championshipService: ChampionshipsService,
        private toastCtrl: ToastController, private router: Router) { }

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
            this.showToast('Championnat ajouté !');
        }, err => {
            this.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }

    deleteChampionship() {
        this.championshipService.deleteChampionship(this.championship.id).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Championnat supprimé !');
        }, err => {
            this.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }

    updateChampionship() {
        this.championshipService.updateChampionship(this.championship).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Championnat mis à jour !');
        }, err => {
            this.showToast("Hum ... Il semblerait qu'il y ait eu un problème !");
        });
    }


    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }

}
