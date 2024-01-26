import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit( ) {}
  public ushow
  public ishow
  public sshow
  public pshow


  unverifiedNews(){

    if(!this.ushow){
     this.ushow=true

   }
    else{
      this.ushow=false
      const { ushow }=this
    }
  }
  infotainment(){
    if(!this.ishow){
      this.ishow=true;
    }
    else{
      this.ishow=false
    }
  }
  sports(){
    if(!this.sshow){
      this.sshow=true;
    }
    else{
      this.sshow=false
    }
  }
  politics(){
    if(!this.pshow){
      this.pshow=true;
    }
    else{
      this.pshow=false
    }
  }

}
