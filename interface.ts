type user = {
    name: string;

    id: number
}


type role = {
    role: "admin" | "manager"
}

type userWithRole = user & role

const mezba: user = {
    name: "mezba ul haque",
    id: 45
}
const employeeMezba: userWithRole = {
    role: "admin",
    name: "mizba,",
    id: 45846
}


// interface 
interface IUser {
    name: string;
    age: number;
}

// merge with interface

interface IUserWithRole extends IUser {
    role: "admin" | "manager"
}


const jhankar: IUserWithRole = {
    name: "jhankar",
    age: 52,
    role: "manager"
}
// console.log(jhankar);

// example of a array to understand the interface for function
type arr = string[]

const array: arr = ['2', '3', '4']

// alternate with interface
interface IArr {
    [index: number]: string;
}
const array2: IArr = ['2', '3', '4']

console.log(array);
console.log(array2);


// function using interface 

type AddFunc = (n1: number, n2: number) => number
interface IAdd {
    (n1: number, n2: number): number;
}


const add: AddFunc = (n1, n2) => n1 + n2

const addd = (n1: number, n2: number): number => {
    return n1 + n2;
}


console.log(add(2, 2));
console.log(addd(2, 2));
