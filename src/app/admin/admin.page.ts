import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddNewsService } from '../news.service'
import { Admin } from '../admin'
import { map } from 'rxjs/operators';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Question } from '../question';
import { Observable } from 'rxjs'





@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  admin:any
  show: boolean;
  public question=[]

  constructor(    
    public popoverController: PopoverController,
    public ans: AddNewsService,
    public auth: UserService,
    public http:HttpClient
    ) { }

  ngOnInit() {
    this.getAdmin();
    this.show=true
    this.getQuestion()
    .subscribe(data=>this.question=data);
  }
  getAdmin() {
  

    this.ans.getAdmin().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(admin=> {
      this.admin = admin;
      this.show=false;
    });
  
  }






 public totalscoreFor56years=90
 public totalScore=0
 public scoreObtain=0
 public Score=0
 async gys56(eve:any,development,id){
     if(this.scoreObtain==0 && this.Score==0 && this.totalScore==0){
      for(let question of this.question){
        if(question.id==id){
          this.scoreObtain=question.name+this.scoreObtain
          this.totalScore=5+this.totalScore
          this.Score=(this.scoreObtain/this.totalScore)*10
        }
      }

     }
     else{
       this.scoreObtain=0
       this.Score=0
       this.totalScore=0
     
        for(let question of this.question){
          if(question.id==id){
            this.scoreObtain=question.name+this.scoreObtain
            this.totalScore=5+this.totalScore
            this.Score=(this.scoreObtain/this.totalScore)*10
          }
        }
  
       
     }
   this.auth.Score=this.scoreObtain
   this.auth.Percent=this.Score
     console.log(this.scoreObtain)
     console.log(this.totalScore)
     console.log(this.Score)

      
  const popover = await this.popoverController.create({
    component: AddAdminComponent,
    cssClass: 'contact-popover',
    translucent: false,
    mode:'ios',
    event: eve
    
  });
  return await popover.present();


   

}
 public id
 public total
 url:string="/assets/data/questions.json"
 getQuestion(): Observable<Question[]>{
   return this.http.get<Question[]>(this.url);
 }

}
