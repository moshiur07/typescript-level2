// ! OOP -> class => object

// class Animal {
//     name :string;
//     spices : string;
//     sound : string;
//     legs : number;
//     constructor(name:string,spices:string,sound:string,legs:number){
//         this.name = name;
//         this.spices = spices;
//         this.sound = sound;
//         this.legs=legs;
//     }
//     makeSound(){
//         console.log(`${this.name} sounds like ${this.sound}`);
//     }

// }




// ! parameter properties

class Animal {

    constructor(public name: string,
        public spices: string,
        public sound: string,
        public legs: number) {
        // this.name =name
    }
    makeSound() {
        console.log(`${this.name} 
            sounds like ${this.sound}`);
    }

}


const dogeshBhai = new Animal('Dogesh mitro',
    'dog',
    'ghew ghew', 4);
console.log(dogeshBhai.name);