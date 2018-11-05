// EJERCICIO 3. 
//Clone

function clone(source) {
	return Object.assign({}, source);
}


const source = {a:1, b:2, c:3};
const target = clone(source);

console.log(target);

//Merge

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge(source, target) {
	return Object.assign({}, b, a);
}

console.log(merge(a,b));