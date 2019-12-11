import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChampionshipPage } from './add-championship.page';

const routes: Routes = [
  {
    path: '',
    component: AddChampionshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChampionshipPageRoutingModule {}
