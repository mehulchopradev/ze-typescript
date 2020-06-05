// Decorators
// 1. class level decorators
// 2. Property level decorator
// 3. Method level decorator

import Freeze from './freeze';
import Currency from './currency';
import Logger from './logger';

@Freeze
export default class Book {
    title: string;

    @Currency('IN')
    price: number;
    pages: number;

    constructor(title: string, price: number, pages: number) {
        this.title = title;
        this.price = price; // this.set price(price)
        this.pages = pages;
    }

    @Logger
    modifyPrice(price: number) {
        this.price = price;
    }
}

// this is not allowed
/* class SomeBook extends Book {

} */

const b1: Book = new Book('Book 1', 900, 890);
//console.log(b1.price); // b1.get price()

b1.modifyPrice(700);

console.log(b1.price);