import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupsListPage } from './cups-list.page';

const routes: Routes = [
  {
    path: '',
    component: CupsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CupsListPageRoutingModule {}
