interface developer<T,Y> {
    name: string;
    salary: number;
    device: {
        model: string;
        price: number;
        airPod: Y
    };
    smartWatch: T;
}

// for smartwatch
 interface backApple{
     model: string,
    isApple: boolean;
    isMetalic: boolean;
}
const backend: developer<backApple,boolean> = {
    name: "MD.Moshiur Rahman",
    salary: 120000,
    device: {
        model: "Macbook pro M5",
        price: 200000,
        airPod: true
    },

    smartWatch: {
        model: "Apple watch 8 Pro",
        isApple: true,
        isMetalic: true
    }
}
interface frontApple {
     model: string,
    isApple: boolean;
    screenSizeInMM : number;
}
const frontend: developer<frontApple,boolean> = {
    name: "Nokib Rahman",
    salary: 80000,
    device: {
        model: "Macbook pro M3",
        price: 150000,
        airPod: false
    },

    smartWatch: {
        model: "Apple watch 5 Pro",
        isApple: true,
        screenSizeInMM: 55
    }
}

console.log(backend);
console.log(frontend);