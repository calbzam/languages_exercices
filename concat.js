//EJERCICIO 2. Concat

a = [1,2,3,4];
b = [5,6,7,8];
c = [9,10,11,12];
d = [13,14,15,16];

const concat = (a, b) => {
    return [...a, ...b];
}

console.log(concat(a,b));

//Opcional

const multipleConcat = (a,b,...args) => {
    let arrayOfArraysToConcat = [...a,...b,...args]
    return resultArray = Array.prototype.concat.apply([], arrayOfArraysToConcat);
};

console.log(multipleConcat(a,b,c,d));

