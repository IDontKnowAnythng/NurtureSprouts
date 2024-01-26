import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadnewsPage } from './uploadnews.page';

const routes: Routes = [
  {
    path: '',
    component: UploadnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadnewsPageRoutingModule {}
