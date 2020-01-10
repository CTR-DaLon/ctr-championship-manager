import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cup, CupsService } from 'src/app/services/cups.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cup-generator',
  templateUrl: './cup-generator.page.html',
  styleUrls: ['./cup-generator.page.scss']
})
export class CupGeneratorPage implements OnInit {
  cups: Cup[];
  cupsToShuffle: Cup[];
  cupsToDo: Cup[];
  currentShufflingCup: Cup;
  started = false;
  cupsToGenerate: number;
  subscription;

  constructor(private cupService: CupsService, private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.cupService.getCups().subscribe(cups => {
      this.cups = cups;
    });
  }

  ionViewWillLeave() {
      this.subscription.unsubscribe();
  }

  startRandomizer() {
    if (this.cups) {
      this.cupsToShuffle = [...this.cups];
      this.cupsToDo = [];
      this.started = true;
      setTimeout(() => {
        this.started = false;
        this.currentShufflingCup = null;
      }, this.cupsToGenerate * 200);
      this.shuffleCups();
    } else {
      this.toastService.showToast('Erreur lors du chargement des coupes');
    }
  }

  shuffleCups() {
    if (this.started) {
      if (this.cupsToShuffle.length === 0) {
        this.cupsToShuffle = [...this.cups];
      }
      const cupToShift = Math.floor(Math.random() * this.cupsToShuffle.length);
      this.currentShufflingCup = this.cupsToShuffle[cupToShift];
      this.cupsToShuffle.splice(cupToShift, 1);
      if (this.currentShufflingCup) {
        this.cupsToDo.push(this.currentShufflingCup);
      }
      setTimeout(() => {
        this.shuffleCups();
      }, 200);
    }
  }
}
