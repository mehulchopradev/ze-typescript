const ea: number[] = []; // arrays are objects in javascript
const cars: string[] = ['audi', 'porsche'];

const el: any[] = ['banana', 90, 'm', 3.14, true];

cars.push('mercedes');
console.log(cars);

cars.unshift('bmw');
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

cars.splice(1, 0, 'bmw');
console.log(cars);

cars.push('i10', 'i20');
console.log(cars);

cars.splice(2, 2);
console.log(cars);

cars.splice(1, 1, 'porshe', 'mercedes');
console.log(cars);

console.log(cars.indexOf('porsheeeee'));