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

interface Imno {
    (b: number): number;
}

function pqr(): Imno {
    const a: number = 10; // pqr function

    // mno - pqr function
    function mno(b: number): number {
        /*
        * where the inner function maintains the memory state of the enclosing function
        * even after the enclosing function has returned - Closures
        */
        return b + (a * a);
    }

    // in javascript a function can return another function
    return mno
}

const f: Imno = pqr();
console.log(f(5));


function qwe(f) {
    const p: number = 9;
    const q: number = f(p);
    return q;
}

function ptr(a: number) {
    return a * a;
}

// in javascript a function can be passed as a parameter to another function
// callback function
console.log(qwe(ptr));