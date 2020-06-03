function abc() {
    const i: number = 8; // i (abc) -> number (8)

    // xyz (abc) -> function
    // in javascript a function can be defined inside another function
    function xyz() {
        const j: number = 10;

        // inner function can access the enclosing function variables
        console.log(i + j);
    }

    xyz();
    console.log(i);
    // console.log(j); // outer function cannot access the inner function variables
}

abc();