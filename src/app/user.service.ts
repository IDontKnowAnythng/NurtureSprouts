import { Injectable } from '@angular/core'




@Injectable()
export class UserService{
    public uid
    public email
    public username
    public phonenumber
    public password
    public fname
    public lname
    public city
    public age
    public sessionId

    public showAddphoto=false

    public Name
    public Score
    public Percent
    
    public unverified:boolean=false
    public infotainment:boolean=false
    public sports:boolean=false
    public politics:boolean=false
    public newsKey:string
    public sUpvotes:boolean
    public sComments:boolean
    public student:boolean=false
    public teacher:boolean=false
    public parents:boolean=false

    public showQuestionnaire


    constructor(){

    }
    setUser(uid){
        this.uid = uid
        this.sessionId=this.uid
    }
    getUID(){
        return this.uid
        console.log(this.uid)
    }
}