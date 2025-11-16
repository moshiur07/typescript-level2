// TODO : type guard => using in typeof

const add  = (n1:number|string,n2:number|string)=>{

    if(typeof n1 === "number" && typeof n2 ==='number'){
       return n1+n2 
    }
    else{
        return n1.toString()+n2.toString()
    }

    
}

// console.log(add(2,2));


//*  in

interface NormalUser {
    name: string;
}
interface AdminUser extends NormalUser {
    role: string;
}

const getUserInfo =(user: NormalUser |AdminUser)=>{
    if("role" in user){
        console.log(`this bustard is a ${user.role}`);
    }
    else{console.log(`this is a ${user.name}`);}
    
}

getUserInfo({name: "haf"})







