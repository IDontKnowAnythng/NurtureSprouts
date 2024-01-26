

export class News{
    $key: string;
    heading: string;
    description: string;
    location: string;
    author: string;
    status = false;
    infotainment=false;
    sports=false;
    politics=false;
    others=true;
    upvote: number=0;
    downvote: number=0;
    report:({
        notIntresting:number,
        sexualContent:number,
        AnimalAbuse:number,
    })
    
        
   
}
export class Upvoters{
    $key: string
    uid: string
    newsid: string
}
export class Comments{
    $key: string
    uid: string
    commentto:string
    newsid: string
    comments: string
    upvotes:number=0
    reply: number=0
   

}
export class Replies{
    $key: string
    replyid:string
    uid:string
    replyto:string
    replycontent:string
}
export class CommentsUpvoters{
    $key: string
    uid: string
    commentid: string
}

export class Status{
    visible:boolean=true
}