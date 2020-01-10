import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupGeneratorPageRoutingModule } from './cup-generator-routing.module';

import { CupGeneratorPage } from './cup-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupGeneratorPageRoutingModule
  ],
  declarations: [CupGeneratorPage]
})
export class CupGeneratorPageModule {}
