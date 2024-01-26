import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin'
import { AddNewsService } from '../news.service'
import { LoginPage } from '../login/login.page'
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { timer } from 'rxjs';



@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  admin: Admin = new Admin();
  submitted = false;
  admin1:any
  


  constructor(
    public ans:AddNewsService,
    public alert: LoginPage,
    public auth:UserService,

  ) { }
  public time=10
  public time1=1

  ngOnInit() {
    timer(3000).subscribe(() => (this.time = -1));
    timer(3000).subscribe(() => (this.time1 = 4));

  }


  
  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }
  save(){
    this.ans.createAdmin(this.admin);
    this.admin = new Admin();
  }
  public disable:boolean;
  onSubmit(){
    if(this.admin.username && this.admin.password)
    {
      this.submitted = true;
      this.save();
      this.alert.ShowAlert("Done","succesfully uploaded your news!!!")
    }
  
  }


}
