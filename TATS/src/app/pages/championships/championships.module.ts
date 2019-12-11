import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionshipsPageRoutingModule } from './championships-routing.module';

import { ChampionshipsPage } from './championships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipsPageRoutingModule
  ],
  declarations: [ChampionshipsPage]
})
export class ChampionshipsPageModule {}
