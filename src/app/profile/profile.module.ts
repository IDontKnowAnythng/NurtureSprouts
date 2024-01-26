import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProfilepopComponent } from '../profilepop/profilepop.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage,ProfilepopComponent,EditprofileComponent],
  entryComponents:[ProfilepopComponent,EditprofileComponent]
})
export class ProfilePageModule {}
