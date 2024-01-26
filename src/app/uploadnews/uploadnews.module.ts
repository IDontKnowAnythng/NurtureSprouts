import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, LoadingController } from '@ionic/angular';

import { UploadnewsPageRoutingModule } from './uploadnews-routing.module';

import { UploadnewsPage } from './uploadnews.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadnewsPageRoutingModule
  ],
  declarations: [UploadnewsPage],


})
export class UploadnewsPageModule {}
