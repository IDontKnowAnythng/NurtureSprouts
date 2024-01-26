import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { LoginPage } from '../login/login.page'
import { AddNewsService } from '../news.service'
import { News } from '../news';
import { AlertController } from '@ionic/angular';
import { Admin } from '../admin';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Content } from '../content';
import { Observable } from 'rxjs'









@Component({
  selector: 'app-uploadnews',
  templateUrl: './uploadnews.page.html',
  styleUrls: ['./uploadnews.page.scss'],
})
export class UploadnewsPage implements OnInit {
 status = false;
 news: News = new News();
  submitted = false;
  hide: boolean=false

  //public author:string
  admin:any;
  user:any;
  admin1: Admin = new Admin();
  public Content=[]

  constructor(
    
    public router: Router,
    public alert:LoginPage,
    public ans:AddNewsService,
    public alertCtrl: AlertController,
    public auth: UserService,
    public toastCtrl: ToastController,
    public popoverController: PopoverController,
    public http: HttpClient



    ) { }
  
  ngOnInit() {
    this.getAdmin();
    this.auth.getUID;
    this.getContent()
    .subscribe(data=>this.Content=data);
  }
  public id=this.auth.uid

  
  getAdmin() {
  

    this.ans.getAdmin().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(admin=> {
      this.admin = admin ;
    });
  }
 

  

  newNews(): void {
    this.submitted = false;
    this.news = new News();

  }
  save(){
    this.ans.createNews(this.news);
    this.news = new News();
  }
  public disable:boolean;
  async onSubmit(){
   
    if(this.news.heading && this.news.description)
    {
      this.news.author=this.id.uid;
      this.submitted = true;
      this.save();
      const toast = await this.toastCtrl.create({
        message: 'uploaded',
        duration: 1000,
        cssClass:'toast-bg',
        color:'warning'
      });
   
      toast.present();
    }
  
  }
  public showMe: boolean;
  public zipped: boolean=true;
   show(){
     if(this.showMe==true)
     {
      this.showMe=false;
     }
     else{
       this.showMe=true;
     }
     this.zipped = !this.zipped;

   }





toMenu(){
  this.router.navigate(['/menu']);

}




 public learnmore=null
 public learnMore(lm){
   this.learnmore=lm;
   document.getElementById('target').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
   }
toTest(questionnaire){
  this.auth.showQuestionnaire=questionnaire
  this.router.navigate(['/admin']);
  console.log('good')

}
url:string="/assets/data/content.json"
getContent(): Observable<Content[]>{
  return this.http.get<Content[]>(this.url);
}
}
