//EJERCICIO 1. Array operations

const arr = [1,2,3,4,5,6,7,8];

const tail = ([, ...t]) => t;
const head = ([h]) => h;
const init = (myArray) => {
    return myArray.slice(0,-1);
}; 
const last = (myArray) => {
    return myArray[myArray.length-1];
};


console.log(tail(arr));
console.log(head(arr));
console.log(init(arr));
console.log(last(arr));


