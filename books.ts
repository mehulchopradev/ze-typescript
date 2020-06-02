// Create a data that represents a book
// Attributes - title, price, pages
// objects in Javascript / Typescript

export {};

// all objects of book must confirm to a shape
interface Book {
    title: string;
    price?: number;
    readonly pages: number;
}

const b1: Book = {
    title: 'Programming in C',
    price: 990,
    pages: 1000
};

const b2: Book = {
    title: 'Programming in Python',
    price: 1000,
    pages: 890
};

const b3: Book = {
    title: 'Programming in scala',
    pages: 900,
}

/* console.log(b1.title);
console.log(b1.price);

console.log(b2.title);
console.log(b2.price); */

// b1.pages = 980; // this will not be allowed as pages is marked as readonly
console.log(b1.pages);

// immutable object
const b4: Readonly<Book> = {
    title: 'Programming in ruby',
    price: 450,
    pages: 230
};

// the below will not be allowed since entire b4 book object is made immutable
/* b4.title = 'Programming';
b4.price = 900; */