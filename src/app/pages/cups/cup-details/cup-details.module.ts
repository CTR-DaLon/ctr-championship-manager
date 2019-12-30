import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupDetailsPageRoutingModule } from './cup-details-routing.module';

import { CupDetailsPage } from './cup-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CupDetailsPageRoutingModule],
  declarations: [CupDetailsPage]
})
export class CupDetailsPageModule {}
