// in Javascript scope of `var` variable is either the entire file or the function in which
// it is defined
// scope of variables in javascript is never block scoped

var num: number = 10;

if (num % 2 == 0) {
    var msg = 'Is even';
} else {
    var msg = 'Is odd';
}

console.log(msg); // this works!!!

// es6 (typescript) introduces `let`
// scope of variable created using `let` is always the block scope {}

if (num % 2 != 0) {
    let ans: string = 'Is Odd'; // scope of ans now becomes the if block
} else {
    let ans: string = 'Is Even'; // scope of ans now becomes the else block
}

// console.log(ans); // this will give an error
// always prefer to use let