import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginPage } from '../login/login.page'
import { AddNewsService } from '../news.service'
import { Verify } from '../verify';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { Parents } from '../user';




@Component({
  selector: 'app-verifynews',
  templateUrl: './verifynews.page.html',
  styleUrls: ['./verifynews.page.scss'],
})
export class VerifynewsPage implements OnInit {


  verify: Verify = new Verify();
  submitted = false;
  constructor(
    public router: Router,
    public alert:LoginPage,
    public ans:AddNewsService,
    public auth: UserService
  ) { }
  teacher:any;
  student:any;
  parents:any;
  role:string
 
  ngOnInit() {
    this.getTeacher();
    this.getStudent();;
    this.getParents();
    //this.findRole()
  }
 
  getTeacher(){
    this.ans.getTeacher().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(teacher=> {
      this.teacher = teacher ;
    });
    
  }
  getStudent(){
    this.ans.getStudent().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(student=> {
      this.student = student ;
    });
    
  }
  getParents(){
    this.ans.getParents().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(parents=> {
      this.parents = parents ;
    });
    
  }
  FoundinStudent:boolean=false
  FoundinTeacher:boolean=false
  FoundinParents:boolean=false


  /*findRole(){
    for(let student of this.student){
      if(student.uid==this.auth.uid){
        this.role=student.role
        this.FoundinStudent=true
      }
     
    }
    if(!this.FoundinStudent){
      for(let teacher of this.teacher){
        if(teacher.uid==this.auth.uid){
          this.role=teacher.role
          this.FoundinTeacher=true
        }
      }
    }
    if(!this.FoundinTeacher){
      for(let parents of this.parents){
        if(parents.uid==this.auth.uid){
          this.role=parents.findRole
          this.FoundinParents=true
        }
      }
    }
  }*/
  newNews(): void {
    this.submitted = false;
    this.verify = new Verify();
  }
  save(){
    this.ans.createVerify(this.verify);
    this.verify = new Verify();
  }
  onSubmit(){
    this.submitted = true;
    this.save();
    this.alert.ShowAlert("thank you","we will verify asap!!!")
  }
  resetName(){
    this.auth.Name=null;
    if(this.auth.Name==null){
      console.log('this wprked')
    }
    
  }

}
