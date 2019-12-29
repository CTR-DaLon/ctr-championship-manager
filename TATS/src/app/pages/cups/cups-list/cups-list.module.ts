import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupsListPageRoutingModule } from './cups-list-routing.module';

import { CupsListPage } from './cups-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupsListPageRoutingModule
  ],
  declarations: [CupsListPage]
})
export class CupsListPageModule {}
