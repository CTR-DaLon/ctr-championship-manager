import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipsPage } from './championships.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipsPageRoutingModule {}
