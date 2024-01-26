import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';


import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'publish',
        loadChildren: () => import('../publish/publish.module').then( m => m.PublishPageModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('../feedback/feedback.module').then( m => m.FeedbackPageModule)
      },
      {
        path: 'fact-check',
        loadChildren: () => import('../fact-check/fact-check.module').then( m => m.FactCheckPageModule)      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/publish'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
