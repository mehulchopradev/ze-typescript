// That can take variable number of parameters
// 0 to n parameters

// variable number of parameters passed at the time of function call
// will be packed into an array; because of ... syntax
function mysum(...nos: number[]): number {
    // console.log(nos); // array
    let sum: number = 0;
    for (let i = 0; i < nos.length; i++) {
        sum += nos[i];
    }

    return sum;
}

console.log(mysum()); // 0
console.log(mysum(5, 6)); // 11
console.log(mysum(3, 4, 7, 8, 3, 8, 3, 5)); // 41