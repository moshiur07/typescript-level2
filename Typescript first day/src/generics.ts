//TODO:  DYnamically generalize : generics

type generics<T> = Array<T>;


// const friends: string[] =['x','y','z']
//  const friends: Array<string> =['x','y','z']
const friends: generics<string> =['x','y','z']

// const roll :number[]=[2,6,7];
const roll :generics<number>=[2,6,7];

// const isMarried : boolean[]=[true,false,true]
const isMarried : generics<boolean>=[true,false,true]

