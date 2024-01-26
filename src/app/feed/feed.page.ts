import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddNewsService } from '../news.service'
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { PopoverController } from '@ionic/angular';
import { FilterComponent } from '../filter/filter.component';
import { Upvoters,Status,Comments } from '../news';
import { Router } from '@angular/router';

import { IfStmt } from '@angular/compiler';





@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  news: any;
  show:boolean
  upvoter: any
  upvoters: Upvoters = new Upvoters();
  comments: Comments = new Comments();


 

  vData=[]
  constructor(
    private fdb: AngularFireDatabase,
    public ans:AddNewsService,
    public db : AngularFireDatabase,
    public auth: UserService,
    public popoverController: PopoverController,
    public router:Router
    ) {}

  ngOnInit() {
    this.getUpvoters();
    this.show=true
  }
 
  





  getUpvoters() {
    this.ans.getUpvoters().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(upvoters=> {
      this.upvoter = upvoters ;
    });
  }
  public age
  
  touploadnews(){
    this.router.navigate(['/uploadnews'])
 
  }
  public selectage:string=null
  selectAge(age){
    this.selectage=age
    console.log(this.selectage)
  }
  public showdes=null
  showDes(status){  
    console.log("worked")
    if(this.showdes==null){
      this.showdes=status
    }
    else{
      this.showdes=null
    }
  }
  goto(){
    this.router.navigate(['/photo'])

  }



  


/*

  zipped: boolean = true;
  up:boolean=true;
  down:boolean=true;
  execute:string
  itemKey1:string
  visible:boolean


 
upvoted(value,itemKey): void {
  for(let upvoter of this.upvoter){
    if(upvoter.newsid==itemKey && upvoter.uid==this.id){
      this.execute=upvoter.newsid
      this.itemKey1=upvoter.key
      console.log("untill here")
      this.visible=true
    }
    
  }
  if(this.visible){
    this.db.object('/news/upvoters/' + this.itemKey1).remove();
    this.db.object('/news/'+ itemKey).update({upvote: value-1})
    this.visible=false
  }
  else{
   

    this.upvoters.uid=this.id
    this.upvoters.newsid=itemKey
    this.db.object('/news/'+ itemKey).update({upvote: value+1})
    this.ans.createUpvoter(this.upvoters)
  }
     

}
 
public comment=true
public commentKey
public value

downvote(value,itemKey): void {
  if(this.comment){
 
   this.comment=false
  this.commentKey=itemKey
  this.value=value
  }
  else{
    this.comment=true
  }
}
async FilterPopover(eve) {
  const popover = await this.popoverController.create({
    component: FilterComponent,
    cssClass: 'my-custom-class',
    event: eve,
    translucent: false
  });
  return await popover.present();
}




public submitted=false
newComments(): void {
  this.submitted = false;
  this.comments = new Comments();

}
save(){
  this.ans.createComments(this.comments);
  this.comments = new Comments();
}
public disable:boolean;
async onSubmit(value,authorid){
 if(this.comments.comments!=null){
  this.comments.newsid=this.commentKey
  this.comments.uid=this.id
  this.comments.commentto=authorid
    this.submitted = true;
    this.save();
    this.db.object('/news/'+ this.commentKey).update({downvote: value+1})
 }
  
    
  

}
*/
}
