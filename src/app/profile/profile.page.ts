import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page'
import { AddNewsService } from '../news.service'
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../user';
import { PopoverController } from '@ionic/angular';
import { ProfilepopComponent } from '../profilepop/profilepop.component';
import { ToastController } from '@ionic/angular';
import { ActionSheetController, Platform } from '@ionic/angular';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router'





const MEDIA_FOLDER_NAME = 'my_media';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor( 
    public info: LoginPage,
    public ans: AddNewsService,
    public auth: UserService,
    public afd: AngularFireDatabase,
    public db : AngularFireDatabase,
    public popoverController: PopoverController,
    public toastCtrl: ToastController,
    public actionSheetController:ActionSheetController,
    private imagePicker: ImagePicker,
    private mediaCapture: MediaCapture,
    public file: File,
    private storage:AngularFireStorage,
    public router: Router



    ) {
      
     }
  //user: User = new User();
  user:any;
  show:boolean=false
  public edit=false
  public number=false
  public city=false
  public newusername:string
  public firstname:string
  public lastname:string
  public newage:number
  public newnumber:number
  public newcity:number

 


  type: string;
  ngOnInit() {

    this.type = 'deposit';
    this.loadfiles();
    this.getStudent();
    this.getUser();
    this.auth.getUID;
    this.getProfilePicture();

  }
  public id=this.auth.uid



  getStudent() {
  

    this.ans.getStudent().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(student=> {
      this.user = student ;
      this.show=true;
    });
    
    
  
  }
  getUser() {
  

    this.ans.getUser().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(user=> {
      this.user = user ;
    });
    
    
  
  }
  choiceUnverified(isStatus: boolean,itemKey){
    this.db.object('/user/'+ itemKey).update({unverified:isStatus});
   }
   choiceInfo(isStatus: boolean,itemKey){
    this.db.object('/user/'+ itemKey).update({infotainment:isStatus});
   }
   choiceSport(isStatus: boolean,itemKey){
    this.db.object('/user/'+ itemKey).update({sports:isStatus});
   }
   choicePolitics(isStatus: boolean,itemKey){
    this.db.object('/user/'+ itemKey).update({politics:isStatus});
   }
   async ProfilePopover(eve) {
    const popover = await this.popoverController.create({
      component: ProfilepopComponent,
      cssClass: 'my-custom-class',
      event: eve,
      translucent: false
    });
    return await popover.present();
  }
  EditprofilePopover() {
    if(!this.edit){
      this.edit=true
    }
    else{
      this.edit=false
    }
  }
  public existUsername=false
  public uname:string
  async postuserinfo(newu,newf,newl,newa,itemKey){
    for ( let value of this.user) {
      if(newu==value.username){
       this.uname=value.username

      }
     
    }
    if(newu==this.uname){
      console.log("user already exist")
      const toast = await this.toastCtrl.create({
        message: 'username already exist',
        duration: 1000,
        cssClass:'toast-bg',
        color:'medium'
      });
   
      toast.present();
    }
    else{
      console.log("user added")
      this.db.object('/user/'+ itemKey).update({username:newu,fname:newf,lname:newl,age:newa});

      const toast = await this.toastCtrl.create({
        message: 'username changed',
        duration: 3000,
        cssClass:'toast-bg',
        color:'medium'
      });
   
      toast.present();
      this.edit=false

    }
 
  
  }
 
  activeNumber(){
    if(!this.number){
      this.number=true
    }
    else{
      this.number=false
    }
  }
  activeCity(){
      if(!this.city){
        this.city=true
      }
      else{
        this.city=false
      }
  }
  postNumber(number1,itemKey){
    this.db.object('/user/'+ itemKey).update({phonenumber:number1});
    this.number=false

  }
  postCity(city1,itemKey){
    this.db.object('/user/'+ itemKey).update({city:city1});
    this.city=false
  }
  async selectMedia() {
    this.getProfilePicture();
    const actionSheet = await this.actionSheetController.create({
      header: 'add profile picture',
      buttons: [
        {
          text: 'Capture Image',
          handler: () => {
            this.captureImage();
          }
        },
  
    
        {
          text: 'select image',
          handler: () => {
            this.pickImages();
          }
        },
        
        {
          text: 'Remove Image',
          handler: () => {
            this.deletefile();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  captureImage() {
    this.mediaCapture.captureImage().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
  pickImages() {
    this.imagePicker.getPictures({}).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          this.copyFileToLocalDir(results[i]);
        }
      }
    );
 
    // If you get problems on Android, try to ask for Permission first
    // this.imagePicker.requestReadPermission().then(result => {
    //   console.log('requestReadPermission: ', result);
    //   this.selectMultiple();
    // });
  }
  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
 
    const ext = myPath.split('.').pop();
    const d = Date.now();
    const newName = `${d}.${ext}`;
 
    const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
 
    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      success => {
        this.loadFiles();
      },
      error => {
        console.log('error: ', error);
      }
    );
  }
  files = [];

  loadFiles() {
    this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
      res => {
        this.files = res;
      },
      err => console.log('error loading files: ', err)
    );

  }
 
 uploadProgress = 0;

 async uploadFile(f: FileEntry){
  const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
  const buffer= await this.file.readAsArrayBuffer(path,f.name);
  const type = this.getMineType(f.name.split('.').pop());
  const fileBlob = new Blob([buffer],type)

  const randomId = Math.random().toString(36).substring(2,8);

  const uploadTask =this.storage.upload(`files/`+this.id.uid,fileBlob);
  
  uploadTask.percentageChanges().subscribe(changes=>
{   
   this.uploadProgress=changes;
});
this.getProfilePicture();
uploadTask.then(async res =>{
  const toast = await this.toastCtrl.create({
    duration:3000,
    message:"upload successfull!!"
  });
  toast.present();
});

this.getProfilePicture();
this.deleteFile(f);
this.db.object('/user/'+ this.id.uid).update({profileP:true});

}

getMineType(fileExt){
  if (fileExt == 'wav') return {type:'audio/wav'};
  else if (fileExt=='jpg') return {type:'image/jpg'};
  else if (fileExt=='mp4') return {type:'video/mp4'};
  else if (fileExt=='MOV') return {type:'video/quicktime'}
}
Files = [];
loadfiles(){
  this.Files = [];

  const storageref = firebase.storage().ref('files');
  storageref.listAll().then(result =>{
    result.items.forEach(async ref=>{
      this.Files.push({
        name: ref.name,
        full: ref.fullPath,ref,
        url: await ref.getDownloadURL()
      });
    });
  });
}
 
deleteFile(f: FileEntry) {
  const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
  this.file.removeFile(path, f.name).then(() => {
    this.loadFiles();
  }, err => console.log('error remove: ', err));
}
public profileUrl=null;
public profileRef=null;
public showProfile=false;
getProfilePicture(){
  for(let f of this.Files){
    if(this.id.uid==f.name){
      this.profileUrl=f.url;
      this.profileRef=f.ref;
      this.showProfile=true;
      console.log(this.profileUrl)

    }

  }  
}
deletefile(){
  this.profileRef.delete().then(()=>{
    this.loadfiles();
    this.db.object('/user/'+ this.id.uid).update({profileP:false});

  })

}
doRefresh(event) {
 this.getProfilePicture();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}







}
