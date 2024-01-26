import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page'
import { AddNewsService } from '../news.service'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fact-check',
  templateUrl: './fact-check.page.html',
  styleUrls: ['./fact-check.page.scss'],
})
export class FactCheckPage implements OnInit {
  verify: any;

  constructor(
    public alert: LoginPage,
    public ans:AddNewsService,
    public db : AngularFireDatabase
  ) { }

  ngOnInit(){
    this.getVerify();
  }
  getVerify() {
    this.ans.getVerify().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(verify=> {
      this.verify = verify ;
    });
  }
  toremove(itemKey){
    //this.ans.deleteNews(this.news.key).catch(err=> console.log(err));
    this.db.object('/verify/' + itemKey).remove();
  }

}
