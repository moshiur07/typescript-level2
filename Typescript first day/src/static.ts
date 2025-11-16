// TODO: create static memory where the value will hold from a common memory 


class Counter {
    static count : number =0;
    increment(){
        return Counter.count +=1
    }
    decrement(){
        return Counter.count -=1;
    }
}


const counter1 = new Counter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());


const counter2 = new Counter();
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());



// ! when method become static,we dont need any instance to perform a method
class Counter2 {
    static count : number =0;
   static increment(){
        return Counter.count +=1
    }
    static decrement(){
        return Counter.count -=1;
    }
}

console.log(Counter2.increment());

