// define a function that takes length, breadth as input parameters, computes the perimeter
// and returns it

function perimeterRectangle(length: number, breadth: number): number {
    const p: number = 2 * (length + breadth);
    return p;
}

// call
const l1: number = 5;
const b1: number = 3;
const p1: number = perimeterRectangle(l1, b1);
console.log(p1);

const l2: number = 5.6;
const b2: number = 3.4;
const p2: number = perimeterRectangle(l2, b2);
console.log(p2);

const l3 = '7';
const b3 = '4';
// const p3 = perimeterRectangle(l3, b3); // this will give an error as length and breadth
// expected by the perimeterRectangle function must be number
// console.log(p3);


// optional parameter
function greetUser(username?: string): string {
    return 'Hello World ' + (username || 'guest'); // in place of if-else, this is cool ||
}

console.log(greetUser('mehul'));
console.log(greetUser()); // Hello World guest


// default parameter
function areaRectangle(length: number = 3, breadth: number = 2): number {
    return length * breadth;
}

// function overloading
console.log(areaRectangle(5, 3));
console.log(areaRectangle(6));
console.log(areaRectangle(undefined, 2.5)); // length will be given a default value of 3

console.log(typeof l1);
console.log(typeof b1);
console.log(typeof areaRectangle); // function
console.log(typeof perimeterRectangle); // function

// Functions in javascript are treated as first class objects (values).
// The way you would treat an number, string, boolean, Student,..., in a similar way you treat function