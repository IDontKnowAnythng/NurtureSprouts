import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactCheckPage } from './fact-check.page';

const routes: Routes = [
  {
    path: '',
    component: FactCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactCheckPageRoutingModule {}
