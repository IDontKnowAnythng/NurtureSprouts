import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { News, Upvoters,Comments,CommentsUpvoters,Replies } from './news';
import { promise } from 'protractor';
import { User,Students,Parents,Teacher } from './user';
import { Verify } from './verify';
import { Admin } from './admin';






@Injectable({
  providedIn: 'root'
})
export class AddNewsService {

  private uPath = '/user';
  private vPath = '/verify';
  private aPath = '/admin';
  private upPath ='/news/upvoters'
  private cPath ='/news/comments'
  private cuPath ='/news/comments/upvoters'
  private rPath ='/news/comments/replies'
  private sPath ='/student'
  private tPath ='/teacher'
  private pPath ='/parents'





  studentRef: AngularFireList<Students>=null;
  teacherRef: AngularFireList<Teacher>=null;
  parentsRef: AngularFireList<Parents>=null;

  

  newsRef: AngularFireList<News>=null;
  userRef: AngularFireList<User>=null;
  verifyRef: AngularFireList<Verify>=null;
  adminRef: AngularFireList<Admin>=null;
  upvotersRef: AngularFireList<Upvoters>=null;
  commentsRef: AngularFireList<Comments>=null;
  commentsupRef: AngularFireList<CommentsUpvoters>=null;
  replyRef: AngularFireList<Replies>=null;




  constructor(private afd: AngularFireDatabase) { 
    this.userRef= afd.list(this.uPath);
    this.verifyRef= afd.list(this.vPath);
    this.adminRef= afd.list(this.aPath);
    this.upvotersRef= afd.list(this.upPath);
    this.commentsRef= afd.list(this.cPath);
    this.commentsupRef= afd.list(this.cuPath);
    this.replyRef= afd.list(this.rPath);
    this.studentRef= afd.list(this.sPath);
    this.teacherRef= afd.list(this.tPath);
    this.parentsRef= afd.list(this.pPath);






  }

//student
createStudent(student: Students): void {
  this.studentRef.push(student);
}
getStudent(): AngularFireList<Students>{
  return this.studentRef;
}
deletestudent(key: string): Promise<void>{
  return this.studentRef.remove(key);
}

//teacher
createTeacher(teacher: Teacher): void {
  this.teacherRef.push(teacher);
}
getTeacher(): AngularFireList<Teacher>{
  return this.teacherRef;
}
deleteTeacher(key: string): Promise<void>{
  return this.teacherRef.remove(key);
}
//parents
createParents(parents: Parents): void {
  this.parentsRef.push(parents);
}
getParents(): AngularFireList<Parents>{
  return this.parentsRef;
}
deletesParents(key: string): Promise<void>{
  return this.parentsRef.remove(key);
}


  //replies
  createReplies(reply: Replies): void {
    this.replyRef.push(reply);
  }
  getReply(): AngularFireList<Replies>{
    return this.replyRef;
  }
  deleteReply(key: string): Promise<void>{
    return this.replyRef.remove(key);
  }
  //commentsUpvoters
  createCommentsUpvoters(commentsup: CommentsUpvoters): void {
    this.commentsupRef.push(commentsup);
  }
  deleteCommentsUpvoters(key: string): Promise<void>{
    return this.commentsupRef.remove(key);
  }
  getCommentsUpvoters(): AngularFireList<CommentsUpvoters>{
    return this.commentsupRef;
  }

  //comments
  createComments(comments: Comments): void {
    this.commentsRef.push(comments);
  }
  getComments(): AngularFireList<Comments>{
    return this.commentsRef;
  }
  deleteComments(key: string): Promise<void>{
    return this.commentsRef.remove(key);
  }
  updateComments(key: string, value :any):Promise<void>{
    return this.commentsRef.update(key,value);
  }



  //admin
  createAdmin(admin: Admin): void {
    this.adminRef.push(admin);
  }
  getAdmin(): AngularFireList<Admin>{
    return this.adminRef;
  }
  //verification
  createVerify(verify: Verify): void {
    this.verifyRef.push(verify);
  }
  getVerify(): AngularFireList<Verify>{
    return this.verifyRef;
  }
  deleteVerify(key: string): Promise<void>{
    return this.verifyRef.remove(key);
  }
  //user
  createUser(student: User):void {
    this.userRef.push(student);
  }
  getUser(): AngularFireList<User>{
    return this.userRef;
  }
  
  //news
  createNews(news: News):void {
    this.newsRef.push(news);
  }
  updateNews(key: string, value :any):Promise<void>{
    return this.newsRef.update(key,value);
  }
  deleteNews($key: string): Promise<void>{
    return this.newsRef.remove($key);
  }
  getNews(): AngularFireList<News>{
    return this.newsRef;
  }
  deleteAll(): Promise<void>{
    return this.newsRef.remove();
  }
  //upvoter
  createUpvoter(upvoter: Upvoters):void {
    this.upvotersRef.push(upvoter);
  }
  deleteUpvoters($key: string): Promise<void>{
    return this.upvotersRef.remove($key);
  }
  getUpvoters(): AngularFireList<Upvoters>{
    return this.upvotersRef;
  }
  
}
