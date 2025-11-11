// Nullable unknown never

// nullable

const getUser = (input: string | null)=>{
    input ? console.log(`from DB : ${input}`) : console.log("all user")

}
getUser(null)


// unknown 
const discountCal = (input : unknown) =>{
    if(typeof input === 'number'){
        console.log(input * 0.1);
    }
    else if(typeof input=== 'string'){
        const [disAmount] = input.split(" ") ;
        console.log(Number(disAmount)*0.1);
    }
    else{
        console.log("enter valid number");
    }
}
discountCal(100);
discountCal('100 TK');
discountCal(null);
