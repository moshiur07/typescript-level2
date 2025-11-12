//* mapped helps us to convert the type dynamically

type areaOfNumber = {
    height: number;
    width: number;
}

type areaOfString<T> = {
    [key in keyof T]: T[key];
}




const area: areaOfString<{
    height: number;
    width: string;
    isAuthentic: boolean;
}> = {
    height: 40,
    width: "20",
    isAuthentic: true
} 