import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactCheckPageRoutingModule } from './fact-check-routing.module';

import { FactCheckPage } from './fact-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactCheckPageRoutingModule
  ],
  declarations: [FactCheckPage]
})
export class FactCheckPageModule {}
