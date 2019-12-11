import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChampionshipPageRoutingModule } from './add-championship-routing.module';

import { AddChampionshipPage } from './add-championship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddChampionshipPageRoutingModule
  ],
  declarations: [AddChampionshipPage]
})
export class AddChampionshipPageModule {}
