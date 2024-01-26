import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { UserService } from '../user.service';
import { UpvotersComponent } from '../upvoters/upvoters.component';
import { ModalController } from '@ionic/angular';





//import { AngularFirestore } from '@angular/fire/firestore'
//import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


    email: string=""
    username: string=""
    phonenumber: string=""
    password: string=""
    cpassword: string=""
    fname:string=""
    lname:string=""
    city:string=""
    age:number

    unverified:boolean=false
    infotainment:boolean=false
    sports:boolean=false
    politics:boolean=false

    constructor(
      public alert: AlertController,
      public router: Router,
      public afAuth: AngularFireAuth,
      public afd: AngularFireDatabase,
      public user: UserService,
      public mc:ModalController

     // public afstore: AngularFirestore,
      //public user: UserService 
     ) { }

    ngOnInit() {
    }
    tologin(){
      this.router.navigate(['/login'])
    }
   async register(){
      const {email,password,cpassword}=this
      if(password!==cpassword){
        //return console.error("Password don't match")
        this.ShowAlert("Error!","Password do not match")
        }
      else{
        try{
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
          console.log(res)
          this.afd.object(`user/${res.user.uid}`).set({
            email,
            password,
            "uid": res.user.uid
          })
          if(res.user){
            this.user.setUser({"uid":res.user.uid})
            this.ShowAlert("Success!","welcome aboard!")
            this.router.navigate(['/tabs'])
                       
      
          }
          
         /* this.afstore.doc(`users/${res.user.uid}`).set({
            username
          })
          this.user.setUser({
            username,
            uid: res.user.uid
          })*/
          
         }
         catch(error){
          console.dir(error)
          this.ShowAlert("Error!",error.message)
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
    student=false
    teacher=false
    parents=false
    async presentModal(stu,tea,par) {
      this.user.student=stu
      this.user.teacher=tea
      this.user.parents=par
      console.log(this.user.newsKey)
      const modal = await this.mc.create({
        component: UpvotersComponent ,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
   
}
