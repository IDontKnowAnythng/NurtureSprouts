import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifynewsPageRoutingModule } from './verifynews-routing.module';

import { VerifynewsPage } from './verifynews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifynewsPageRoutingModule
  ],
  declarations: [VerifynewsPage]
})
export class VerifynewsPageModule {}
