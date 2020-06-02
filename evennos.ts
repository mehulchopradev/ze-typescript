// es6 (typescript) introduces `const`
// `const` is very much like `let` -- block scoped
// `const` variable cannot assume a different value at a later point in time (no reassignment possible)
// `const` variables then have to be initialized compulsorily at the line of declaration


const n: number = 50; // took it as user input

let i: number = 0;

// n = 34; // this will give an error
while (i <= n) {
    if (i % 2 == 0) {
        console.log(i);
    }

    i++;
}

// If given a chance
// 1. const
// 2. let
// 3. var (but u shud never be coming here!)