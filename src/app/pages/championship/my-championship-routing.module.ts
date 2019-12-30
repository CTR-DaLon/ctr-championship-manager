import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyChampionshipPage } from './my-championship.page';

const routes: Routes = [
  {
    path: '',
    component: MyChampionshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyChampionshipPageRoutingModule {}
