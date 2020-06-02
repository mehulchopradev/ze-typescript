// Create a data that represents a student
// Attributes - name, gender, roll, marks
// Objects
// On Student objects that we create, we should be able to invoke actions (methods) on them
    // getDetails
        /*
            Name: mehul
            Roll: 10
            Gender: m
            Marks: 90
        */
    // getGrade
        /*
            >= 70 - A
            >= 60 - B
            >= 40 - C
            < 40 - F
            > 100 or < 0 - I
        */
// class - Blueprint for an object. 1 to * objects can be created from a class
// Person X
// There can be only one export default statement in a module
export default class Student {
    name: string;
    gender: string;
    roll: number;
    marks: number;

    // constructor overloading
    constructor(name?: string, gender?: string, roll?: number, marks?: number) {
        // `this` implicit argument which is the address of the object for which this constructor was called
        this.name = name;
        this.gender = gender;
        this.roll = roll;
        this.marks = marks;
    }

    getDetails(): string {
        // `this` which represents the current object on which the getDetails() was called
        // is available as an implicit variable in the getDetails()
        /* return 'Name: ' + this.name + '\nRoll: ' + this.roll + '\nGender: ' + this.gender
            + '\nMarks: ' + this.marks; */
        return `Name: ${this.name}\nRoll: ${this.roll}\nGender: ${this.gender}\nMarks: ${this.marks}`;
    }

    // Internally
    /*
    getDetails(this: Student) {}
    */

    getGrade(): string {
        const marks = this.marks;
        let grade: string;
        if (marks > 100 || marks < 0) {
            grade = 'I'
        } else if (marks >= 70) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 40) {
            grade = 'C';
        } else {
            grade = 'F';
        }

        return grade;
    }
}

export class StudentInfo {

}
