export {};

var name = 'mehul chopra'; // javascript way

var fullName: string = 'mehul chopra'; // typescript way
// fullName = 90; // gives error
fullName = 'mehul';

var age: number = 32;
var pi: number = 3.14;
var lightsOn: boolean = true;

// +, -, *, /, %
// >, <, >=, <=, ==, ===, !=, !==

var x: number = 5;
var y: string = '5';

// console.log(x == y); // gives error in typescript since we cannot compare number with a string

var a: number = 6;
var b: number = 5 + 1;
console.log(a == b); // in typescript no need of using the === operator

// &&, ||
var gender: string = 'm';
var canParty: boolean = (age > 18) || (gender == 'm');
console.log(canParty);

age = 15;
canParty = (age > 18) || (gender == 'm');
console.log(canParty);

gender = 'f';
canParty = (age > 18) || (gender == 'm');
console.log(canParty);

age = 20;
gender = 'm';
canParty = (age > 18) && (gender == 'm');
console.log(canParty);