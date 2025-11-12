// ! Problem with enum => when it goes to compiler it creates a extra function with ultimately make the file heavy .
//? solution: create a object with as constant and use keyof typeof 


// enum userRoles {
//     Admin = "Admin",
//     Editor ="Editor",
//     Viewer ="Viewer"
//  }
const  userRoles =  {
    Admin : "Admin",
    Editor :"Editor",
    Viewer :"Viewer"
 } as const

 const canEdit =(role:keyof typeof userRoles)=>{
    if(role === userRoles.Admin || role ===userRoles.Editor){
        return true
    }
    return false
 }

console.log(canEdit(userRoles.Admin));