import Student, { StudentInfo } from './students'; // relative path to the module without the ts extension
// how many Student objects created ??? - 0
console.log(Student.count);

// Person Y
// create an object from a class
/* const s1: Student = new Student();
// Internally
// 1. `new` operator reserves memory for Student object in the RAM (40006)
// 2. Student() => Student.constructor(40006)

// initialized the attributes of the Student object
s1.name = 'mehul';
s1.gender = 'm';
s1.roll = 10;
s1.marks = 90; */

const s1: Student = new Student('mehul', 'm', 10, 90);
// Internally
// 1. `new` operator reserves memory for Student object in the RAM (40005)
// 2. Student('mehul', 'm', 10, 90) => Student.constructor('mehul', 'm', 10, 90, 40005)


console.log(s1.getDetails());

// s1.roll = -15; // will give an error since roll is private

s1.roll = -15;
// Internally
// s1.roll(15) // set method

// s1.setRoll(-8768);

console.log(s1.getDetails());
// Internally
// s1.getDetails() => Student.getDetails(s1)

const s2: Student = new Student();

// initialized the attributes of the Student object
s2.name = 'jane';
s2.gender = 'f';
s2.roll = 12;
s2.marks = 45;

console.log(s2.getDetails());
// Internally
// s2.getDetails() => Student.getDetails(s2)

console.log(s1.getGrade());
console.log(s2.getGrade());

// console.log(s2.getRoll()); // s2.roll
console.log(s2.roll);
// Internally
// s2.roll() # get method

// hw many Student objects created till now ? - 2
console.log(Student.count);

const s3: Student = Student.createStudent('jill', 'f', 34, 98);
console.log(s3.getDetails());