import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cup, CupsService } from 'src/app/services/cups.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cup-details',
  templateUrl: './cup-details.page.html',
  styleUrls: ['./cup-details.page.scss'],
})
export class CupDetailsPage implements OnInit {

    cup: Cup = {
        name: '',
        img: ''
    }

  constructor(private activatedRoute: ActivatedRoute, private cupService: CupsService, private router: Router,
    private toastService: ToastService) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
          this.cupService.getCup(id).subscribe((cup: Cup) => {
              this.cup = cup
          })
      }
  }

  add() {
      this.cupService.addCup(this.cup).then(() => {
          this.toastService.showToast('Coupe créée');
          this.router.navigateByUrl('/cups-list');
      }, error => {
          console.log('Error add cup', error);
      }).catch(error => {
          console.log('Error add cup', error);
      });
  }

  update() {
      this.cupService.updateCup(this.cup).then(() => {
          this.toastService.showToast('Coupe mise à jour');
          this.router.navigateByUrl('/cups-list');
      }, error => {
          console.log('Error update cup', error);
      }).catch(error => {
          console.log('Error update cup', error);
      });
  }

  delete() {
      this.cupService.deleteCup(this.cup.id).then(() => {
          this.toastService.showToast('Coupe supprimée');
          this.router.navigateByUrl('/cups-list');
      }, error => {
          console.log('Error delete cup', error);
      }).catch(error => {
          console.log('Error delete cup', error);
      });
  }

}
