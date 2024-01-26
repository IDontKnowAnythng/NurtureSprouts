import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../user'




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public password: string;
  public usr: string;
  public pass: string;
  public usernames:string;
  public passwords:string;

  showMe: boolean =false;
  user1: User = new User();
  


  constructor(
    public alert: AlertController,
    public router: Router,
    public afAuth: AngularFireAuth,
    public user: UserService,
   ) { }

  ngOnInit() {
    this.autoLogin()
  }
  
  toregister(){
    this.router.navigate(['/register'])
  }
  autoLogin(){
    console.log(this.usernames,this.passwords)
  }

  async login(){
  const {username ,password}=this


  try{
    const  res = await this.afAuth.auth.signInWithEmailAndPassword(username,password)
    //this.ShowAlert("Success!","welcome aboard!")
     var usernames = window.localStorage.getItem("test");
    console.log(usernames)
  
    if(res.user){
      this.user.setUser({"uid":res.user.uid})
      
      this.router.navigate(['/tabs'])
     

    }
  }
  catch(err){
    console.dir(err)
    this.ShowAlert("Error!",err.message)
    if(err.code==="auth/user-not-found"){
     
      console.log("user not found")
    }
  }
  
}
async ShowAlert(header: string,message: string){
  const alert = await this.alert.create({
    header,
    message,
    buttons: ["OK"] 
})
await alert.present()
}
logOut(){
  this.afAuth.auth.signOut()
}



}