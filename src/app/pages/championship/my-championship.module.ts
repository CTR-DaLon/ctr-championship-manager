import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyChampionshipPageRoutingModule } from './my-championship-routing.module';

import { MyChampionshipPage } from './my-championship.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyChampionshipPageRoutingModule],
  declarations: [MyChampionshipPage]
})
export class MyChampionshipPageModule {}
