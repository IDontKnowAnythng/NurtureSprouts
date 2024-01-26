import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router'
import * as firebase from 'firebase/app';
import { UserService } from '../user.service';





@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  constructor(public router: Router,public auth: UserService) { }

  ngOnInit() {
    // this.loadfiles();
  }
  // toProfile(){
  //   this.getProfilePicture();
  // }
  Files = [];

  // loadfiles(){
  //   this.Files = [];
  
  //   const storageref = firebase.storage().ref('files');
  //   storageref.listAll().then(result =>{
  //     result.items.forEach(async ref=>{
  //       this.Files.push({
  //         name: ref.name,
  //         full: ref.fullPath,ref,
  //         url: await ref.getDownloadURL()
  //       });
  //     });
  //   });
  // }
  // getProfilePicture(){
  //   console.log(this.auth.showAddphoto)

  //   for(let f of this.Files){
  //     if(this.auth.uid.uid==f.name){
  //       console.log(f.name);
  //       console.log(this.auth.uid.uid)
  //       this.auth.showAddphoto=true
  //       console.log(this.auth.showAddphoto)

  //     }
  
  //   }  
  // }
}
