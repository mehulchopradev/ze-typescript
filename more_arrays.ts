const pointers: number[] = [5, 6, 5, 4, 7, 8, 10, 10, 1, 5, 3, 9];

// Imperative programming
console.log('*********************Odds*************************');
// print all the odd pointers that were scored in the class
/* for(let pointer of pointers) { // enhanced for loop
    if (pointer % 2 != 0) {
        console.log(pointer);
    }
} */

// functional programming
/* function printOdd(value: number) {
    if (value % 2 != 0) {
        console.log(value);
    }
}
pointers.forEach(printOdd); */

// annonymous function syntax
/* pointers.forEach(function (value:number) {
    if (value % 2 != 0) {
        console.log(value);
    }
}); */

// arrow function syntax
pointers.forEach((value: number) => {
    if (value % 2 != 0) {
        console.log(value);
    }
});

console.log('********************Evens more than 5 ************************');
// print all the even pointers greater than 5 that were scored in the class
/* for(let pointer of pointers) {
    if (pointer % 2 == 0 && pointer > 5) {
        console.log(pointer);
    }
} */

// functional programming
pointers.forEach((value: number) => {
    if (value % 2 == 0 && value > 5) {
        console.log(value);
    }
});

// generate a new array which consists of odd elements more than 5 from the pointers array (filtering)
const odds: number[] = pointers.filter((value: number) => {
    return (value % 2 != 0) && (value > 5);
});
console.log(odds);

// generate a new array which consists of all elements from pointers array, but with pointer mark
// deducated by 1 (mapping)
const deductedMarks: number[] = pointers.map((value: number) => {
    return value - 1;
});
console.log(deductedMarks);