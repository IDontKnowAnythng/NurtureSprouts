import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  constructor(public router: Router,public auth: UserService) { }

  ngOnInit() {
  }

toCC(name){
  console.log(name)
  this.auth.Name=name
  this.router.navigate(['/verifynews'])

}
toPC(name){
  console.log(name)
  this.auth.Name=name
  this.router.navigate(['/verifynews'])


}
toParC(name){
  console.log(name)
  this.auth.Name=name
  this.router.navigate(['/verifynews'])


}
toTT(name){
  console.log(name)
  this.auth.Name=name
  this.router.navigate(['/verifynews'])


}
toRefresh(){
  const sub =this.router.navigate(['/profile'])
  return sub;
}

}
