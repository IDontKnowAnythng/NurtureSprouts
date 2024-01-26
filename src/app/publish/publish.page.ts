import { Component, OnInit, Input } from '@angular/core';
import { LoginPage } from '../login/login.page'
import { AddNewsService } from '../news.service'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { News } from '../news';
import { Router, RouterEvent } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from '../setting/setting.component';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-publish,app-news-details',
  templateUrl: './publish.page.html',
  styleUrls: ['./publish.page.scss'],
})
export class PublishPage implements OnInit {
 
  submitted = false;
  @Input() news1: News;
  news:any;
  user:any;
  show:boolean
  constructor(
    private router: Router,
    public alert: LoginPage,
    public ans:AddNewsService,
    public db : AngularFireDatabase,
    public popoverController: PopoverController,
    private toastCtrl: ToastController
    
  ) { }

  ngOnInit() {
    this.getNews();
    this.show=true
    this.getUser();

  }
  
  getNews() {
  

    this.ans.getNews().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(news=> {
      this.news = news ;
      this.show=false;
    });
  
  }
  getUser() {
  

    this.ans.getUser().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(user=> {
      this.user = user ;
    });
  }
  async toremove(itemKey){
    this.db.object('/news/' + itemKey).remove();
    const toast = await this.toastCtrl.create({
      message: 'deleted',
      duration: 1000,
      cssClass:'toast-bg',
      color:'warning'
    });
 
    toast.present();
  }
  async test(){
    const toast = await this.toastCtrl.create({
      message: 'deleted',
      duration: 1000,
      cssClass:'toast-bg',
      color:'warning'
    });
 
    toast.present();
  }

 
  
  //deleteAll(){
  //  this.ans.deleteAll().catch(err=>console.log(err));
 // }
 // topublish($itemKey,news){
   // this.db.object('/news/' + $itemKey).update(this.news);


 // }
 
 updateStatus(isStatus: boolean,itemKey){
  this.db.object('/news/'+ itemKey).update({status:isStatus});
 }
 async SettingPopover(eve) {
  const popover = await this.popoverController.create({
    component: SettingComponent,
    cssClass: 'my-custom-class',
    event: eve,
    translucent: false
  });
  return await popover.present();
}
updatePol(isPol:boolean,itemKey){
  this.db.object('/news/'+ itemKey).update({politics:isPol});

}
updateSports(isSports:boolean,itemKey){
  this.db.object('/news/'+ itemKey).update({sports:isSports});

}
updateInfo(isInfo:boolean,itemKey){
  this.db.object('/news/'+ itemKey).update({infotainment:isInfo});

}
updateOthers(isothers:boolean,itemKey){
  this.db.object('/news/'+ itemKey).update({others:isothers});

}

}


 





