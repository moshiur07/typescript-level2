// ! this is two different class(blueprint). majority property and some method are common  . so i have to write everything for each class. there is a more effective way for it. 
// TODO : solution is to extends the common part and write extra pops or method if needed! 
//* this is called derive class

// class Student {
//     name :string;
//     age:number;
//     address: string;
//     constructor(name:string,age:number,address:string){
//         this.name = name;
//         this.age=age;
//         this.address=address;

//     }
//     getSleep(numOfHours:number){
//         console.log(`this ${this.name} nigga sleep ${numOfHours} every fokinday`);
//     }

// }
// class Teacher {
//     name :string;
//     age:number;
//     address: string;
//     designation: string;
//     constructor(name:string,age:number,address:string,designation:string){
//         this.name = name;
//         this.age=age;
//         this.address=address;
//         this.designation =designation

//     }
    
//     getSleep(numOfHours:number){
//         console.log(`this ${this.name} nigga sleep ${numOfHours} every fokinday`);
//     }

//     classHours(h:number){
//         console.log(`${this.name} sir take  ${h}h of class` );
//     }
// }




class Parent {
    name :string;
    age:number;
    address: string;
    constructor(name:string,age:number,address:string){
        this.name = name;
        this.age=age;
        this.address=address;

    }
    getSleep(numOfHours:number){
        console.log(`this ${this.name} nigga sleep ${numOfHours} every fokinday`);
    }

}


class Student extends Parent {}
class Teacher extends Parent {
    designation: string;
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation =designation
    }
    classHours(h:number){
        console.log(`${this.name} sir take  ${h}h of class` );
    }
}

const watking = new Student("Watking Jr.",23,"san fransisco,USA");
watking.getSleep(15)
