function typeData(bien1: string | number, bien2: string | number, ketqua: 'as-number' | 'as-string'): number | string {
    let result: number | string;

    if (typeof bien1 === 'number' && typeof bien2 === 'number' && ketqua === 'as-number') {
        result = bien1 + bien2;
    } else if (typeof bien1 === 'string' && typeof bien2 === 'string' && ketqua === 'as-string') {
        result = bien1.toString() + bien2.toString();
    } else {
        throw new Error('Invalid input or output type.');
    }

    return result;
}


console.log(typeData(5, 10, 'as-number')); 
console.log(typeData('5', '10', 'as-string')); 
