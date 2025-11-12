// ! constrain basically means setting a rule my interface or type or function


const addStudent = <T extends {id:number,name:string}>(studentInfo:T)=>{
    return {
        course: 'Next level Web development',
        ...studentInfo
    }
}


const student1 = {
  id:123,
  name: 'Jhankar mahabub',
  isPaid: true  
}
const student2 = {
  id:156,
  name: 'Mezba',
  isPaid: false  
}

const student3 ={
    id:5,
    name:'niggachoda',
    hasWatch : true
}

const result = addStudent(student3)

console.log(result);
