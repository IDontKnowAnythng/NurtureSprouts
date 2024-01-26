import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifynewsPage } from './verifynews.page';

const routes: Routes = [
  {
    path: '',
    component: VerifynewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifynewsPageRoutingModule {}
