import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profilepop',
  templateUrl: './profilepop.component.html',
  styleUrls: ['./profilepop.component.scss'],
})
export class ProfilepopComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  public suggestion=false
  editProfile(){
    if(!this.suggestion){
      this.suggestion=true
    }
    else{
      this.suggestion=false
    }
  }
  logout(){
    
  }

}
