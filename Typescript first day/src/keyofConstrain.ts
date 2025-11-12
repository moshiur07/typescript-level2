type richPeoples ={
    car:string,
    bike:string,
    yacht: string
}

type poorNigga = "car"|"bike"|"yacht";
type poorNigga2 = keyof richPeoples;


const nigga : poorNigga = "bike"

type User ={
    name:string;
    id:number,
    address:{
        city:string
    }
}

const user = {
    name: 'sf',
    id:55,
    address:{
        city:"fdslkj"
    }
}

const getValue =<T>(obj:T , key:keyof T)=>{
    return obj[key]
}


const student = {
    id: 596,
    name : 'jkglsd'
}


const result = getValue(user,"name");
const result2 = getValue(student,"name");
console.log(result2,result);
