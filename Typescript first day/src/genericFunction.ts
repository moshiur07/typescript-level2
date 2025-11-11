// ! function with generics
const createArrayWithGenerics =<T> (value : T)=>{
    return [value]
}

const arrayOfnumber  = createArrayWithGenerics(12)
const arrayOfString  = createArrayWithGenerics<string>('Apple')

// console.log(arrayOfnumber);
// console.log(arrayOfString);


// todo:  Array with Tuple
const createArrayTuple = <X,Y>(param1:X,param2:Y)=>{
    return [param1,param2]
}


const tuple = createArrayTuple<object,number>({name:"Jhankar"},42);
console.log(tuple);


// todo : add a student to the course

const addStudent = <T>(studentInfo:T)=>{
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
const result = addStudent(student2)

console.log(result);
