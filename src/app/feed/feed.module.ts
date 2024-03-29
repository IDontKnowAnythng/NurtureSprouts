import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { HideHeaderDirective } from './hide-header.directive';
import { FilterComponent } from '../filter/filter.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule
  ],
  declarations: [FeedPage, HideHeaderDirective,FilterComponent],
  entryComponents:[FilterComponent]
})
export class FeedPageModule {}
