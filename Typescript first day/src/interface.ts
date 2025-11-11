type user ={
    name:string;

    id:number
}


type role ={
    role : "admin" | "manager"
} 

type userWithRole = user & role

const mezba: user ={
    name:   "mezba ul haque",
    id: 45
}
const employeeMezba : userWithRole  = {
    role: "admin",
    name: "mizba,",
    id: 45846
}


// interface 
interface IUser {
    name: string ;
    age : number ;
}

// merge with interface

interface IUserWithRole extends IUser {
     role : "admin" | "manager"
}


const jhankar:IUserWithRole ={
    name: "jhankar",
    age: 52,
    role: "manager"
} 
// console.log(jhankar);


// function using interface 

