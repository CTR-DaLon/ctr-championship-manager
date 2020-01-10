import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupGeneratorPage } from './cup-generator.page';

const routes: Routes = [
  {
    path: '',
    component: CupGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CupGeneratorPageRoutingModule {}
