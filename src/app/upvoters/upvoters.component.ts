import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
import { CommentsUpvoters,Replies } from '../news';
import { AddNewsService } from '../news.service'
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';







@Component({
  selector: 'app-upvoters',
  templateUrl: './upvoters.component.html',
  styleUrls: ['./upvoters.component.scss'],
})
export class UpvotersComponent implements OnInit {

  constructor(
    public modalCtrl:ModalController,
    public auth: UserService,
    public ans: AddNewsService,
    public db: AngularFireDatabase,
    public alert: AlertController,
    public router: Router,
    public afAuth: AngularFireAuth,
  ) { }
    

  ngOnInit() {


  }





 
 
 
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    
  }



 
public role:string



name: string=""
dob: string=""
gender:string=""
phonenumber: string=""
password: string=""
cpassword: string=""
schoolname:string=""
email:string=""
city:string=""
pincode:number
state:string=""
profileP=false


Tname: string=""
Tgender:string=""
Tmobile: string=""
Tpassword: string=""
Tcpassword: string=""
Temail:string=""
Tcity:string=""
Tpincode:number
Tstate:string=""
workAt:string=""
subject:string=""
category:string=""




Pname: string=""
relationship:string=""
childName:string=""
Pmobile: string=""
childDob:string=""
childGender:string=""
childSchoolname:string=""
NoOfChildren:number
typeofFamily:string=""
Ppassword: string=""
Pcpassword: string=""
Pemail:string=""
Pcity:string=""
Ppincode:number
Pstate:string=""






async register(){
  this.role="student"
  const {email,password,cpassword,name,profileP,schoolname,city,pincode,state,dob,phonenumber,gender,role
  }=this
  if(password!==cpassword){
    //return console.error("Password don't match")
    this.ShowAlert("Error!","Password do not match")
    }
  else{
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      console.log(res)
      this.db.object(`student/${res.user.uid}`).set({
        name,
        schoolname,city,pincode,state,dob,phonenumber,gender,role,
        email,
        password,
        "uid": res.user.uid
      })
      this.db.object(`user/${res.user.uid}`).set({
        name,email,password,profileP,role,"uid":res.user.uid
      })
      if(res.user){
        this.auth.setUser({"uid":res.user.uid})
        this.router.navigate(['/tabs'])
        this.dismiss()

        this.ShowAlert("Success!","welcome aboard!")
                   
  
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



  async Tregister(){
    this.role="teacher"
    const {Temail,Tpassword,Tcpassword,profileP,Tname,Tcity,Tpincode,role,Tstate,Tmobile,Tgender,workAt,subject,category}=this
    if(Tpassword!==Tcpassword){
      //return console.error("Password don't match")
      this.ShowAlert("Error!","Password do not match")
      }
    else{
      try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(Temail,Tpassword)
        console.log(res)
        this.db.object(`teacher/${res.user.uid}`).set({
          Tname,
          Tcity,Tpincode,Tstate,Tmobile,Tgender,workAt,role,subject,category,
          Temail,
          Tpassword,
          "uid": res.user.uid
        })
        this.db.object(`user/${res.user.uid}`).set({
          name,Temail,Tpassword,profileP,role,"uid":res.user.uid
        })
        if(res.user){
          this.auth.setUser({"uid":res.user.uid})
          this.router.navigate(['/tabs'])
          this.dismiss()
  
          this.ShowAlert("Success!","welcome aboard!")
                     
    
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
  async Pregister(){
    this.role="parents"
      const {Pemail,Ppassword,Pmobile,Pcpassword,profileP,role,childSchoolname,Pname,Pcity,childGender,Ppincode,Pstate,relationship,childName,
        NoOfChildren,typeofFamily}=this
      if(Ppassword!==Pcpassword){
        //return console.error("Password don't match")
        this.ShowAlert("Error!","Password do not match")
        }
      else{
        try{
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(Pemail,Ppassword)
          console.log(res)
          this.db.object(`parents/${res.user.uid}`).set({
            Pemail,Ppassword,childSchoolname,Pname,role,Pcity,Pmobile,childGender,Ppincode,Pstate,relationship,childName,
        NoOfChildren,typeofFamily,
            "uid": res.user.uid
          })
          this.db.object(`user/${res.user.uid}`).set({
            name,Pemail,Ppassword,profileP,role,"uid":res.user.uid
          })
          if(res.user){
            this.auth.setUser({"uid":res.user.uid})
            this.router.navigate(['/tabs'])
            this.dismiss()
    
            this.ShowAlert("Success!","welcome aboard!")
                       
      
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
  tologin(){
    this.dismiss()
    this.router.navigate(['/login'])
  }
}
