const pointers: number[] = [5, 6, 5, 4, 7, 8, 10, 10, 1, 5, 3];

// Imperative programming
console.log('*********************Odds*************************');
// print all the odd pointers that were scored in the class
for(let pointer of pointers) { // enhanced for loop
    if (pointer % 2 != 0) {
        console.log(pointer);
    }
}


console.log('********************Evens more than 5 ************************');
// print all the even pointers greater than 5 that were scored in the class
for(let pointer of pointers) {
    if (pointer % 2 == 0 && pointer > 5) {
        console.log(pointer);
    }
}

// functional programming