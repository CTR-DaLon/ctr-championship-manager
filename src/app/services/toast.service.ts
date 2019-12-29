import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

    private toastDuration: number = 2000;

  constructor(private toastController: ToastController) { }

    showToast(msg) {
        this.toastController.create({
            message: msg,
            duration: this.toastDuration
        }).then(toast => toast.present());
    }

}
