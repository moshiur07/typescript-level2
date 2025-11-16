// * OOP => instance of typeGuard
//! What is instance? => when a object is created with the help a class then that object is called a instance of that class

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    getSleep(numOfHours: number) {
        console.log(`this person take ${numOfHours}h of sleeps`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);

    }
    doStudy(numOfHours: number = 5) {
        console.log(`this person take ${numOfHours}h of study`);
    }
}
class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    takeClass(numOfHours: number) {
        console.log(`this person take ${numOfHours}h of class`);
    }
}

const getUserInfo=(user: Person)=>{
 if(user instanceof Student){
    user.doStudy()
 }
 else if(user instanceof Teacher){
    user.takeClass(4);
 }
 else{
    user.getSleep(10)
 }
}

const student1 = new Student("Mr. Bobby");
const teacher1 =new Teacher("Mr. Diddy")
const person =new Person("Mr. Person")

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person);


// * More smart way with function

const isStudent =(user:Person)=>{
    return user instanceof Student;
}
const isTeacher =(user:Person)=>{
    return user instanceof Teacher;
}


const getUserInfo2=(user: Person)=>{
 if(isStudent(user)){
    user.doStudy()
 }
 else if(isTeacher(user)){
    user.takeClass(4);
 }
 else{
    user.getSleep(10)
 }
}