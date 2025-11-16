// * polymorphism : bohurupi
// ! when the method used for different purpose but their outerlook is simillar that calls polymorphism


class Person {
    getSleep(){
        console.log(`Ima happy person . I sleep for 10h`);
    }
}

class Student extends Person {
    getSleep(){
        console.log(`Ima Student . I sleep for 8h`);
    }
}

class NextLevel extends Person {
    getSleep(){
        console.log(`Ima developer . I sleep for 6h`);
    }

}
const getSleepingHours=(params:Person)=>{
    params.getSleep()
}

const instance1 =new Person()
const instance2 =new Student()
const instance3 =new NextLevel()

// getSleepingHours(instance2)


class Shape {
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius : number;
    constructor(radius:number) {
        super()
        this.radius = radius
    }

    getArea():number{
        return Math.PI*this.radius*this.radius;
    }
}