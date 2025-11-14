// function , array, objects
// tuple


let bazarList: (string | number)[] = ['eggs', 12, 'milk', 'banana']
bazarList.push('onion')



// tuple
let coordinates: [number, number, boolean] = [20, 30, false]

let nameAndRoll: [string, number] = ['mezba', 54]

// reference : objects
type User = {
    organization: "niggatola";
    firstName: string;
    middleName?: string;
    lastName: string;
}
const user: User = {
    organization: 'niggatola',
    firstName: 'mezba',
    lastName: "abdul"
}
console.log(user.firstName);
// const user: {
//     organization: "niggatola";
//     firstName: string;
//     middleName?: string;
//     lastName: string;
// } = {
//     organization: 'niggatola',
//     firstName: 'mezba',
//     lastName: "abdul"
// }

console.log(user);