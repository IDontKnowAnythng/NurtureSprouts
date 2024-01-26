export class User{
    $key: string;
    name: string;
    email: string;
    password: string;
    phonenumber:string;
    dob:string;
    city:string;
    pincode:number;
    gender:string;
    state:string;
    schoolname:string;
}
export class Students{
    $key:string;
    name: string;
    dob: string;
    gender:string;
    phonenumber: string;
    password: string;
    schoolname:string;
    email:string;
    city:string;
    pincode:number;
    state:string;

}
export class Parents{
    $key:string;
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
Pemail:string=""
Pcity:string=""
Ppincode:number
Pstate:string=""

}
export class Teacher{
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
}