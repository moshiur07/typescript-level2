type user = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    mobile: string,
    isMarried?: boolean;
}
const user1 : user = {
    id: 152,
    name:{
        firstName:'nigga',
        lastName:'tola'
    },
    mobile:'055555',
    isMarried: false
}
console.log(user1);