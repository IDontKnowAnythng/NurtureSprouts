import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  page;
 close: boolean=true;
  constructor(  public router:Router) { }

  ngOnInit() {
  }
  writeNews(){

  }
 
 adminPanel(){
   console.log("this is working")
   this.router.navigate(['../admin']);
   this.close=false;
  }
  logout(){

  }


}
