const kgToGramConverter = (kg: number | string | null): number | string | null => {
    if (typeof kg === 'number') {
        return (kg * 0.1);
    }
    else if (typeof kg === 'string') {
        const [kilo] = kg.split(" ");
        return (Number(kilo) * 0.1);
    }
    else {
        return  'error...' 
    }
}


const result1 = kgToGramConverter(5) as number
console.log({ result1 });
const result2 = kgToGramConverter("5 kg")
console.log({ result2 });