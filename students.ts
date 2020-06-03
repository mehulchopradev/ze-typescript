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

// Every class also occupies memory in the RAM
// 1 object per class
export default class Student {
    // Access specifiers (visibility specifiers)

    // by default the access specifier is public
    // public - visible everywhere within the class and even outside the class
    // private - visible only from within the class

    // object attributes
    name: string;
    gender: string;
    private _roll: number;
    marks: number;

    // class object attributes
    static count: number = 0; // lives in the single object that represents the Student class

    // constructor overloading
    // by default is public
    constructor(name?: string, gender?: string, roll?: number, marks?: number) {
        // `this` implicit argument which is the address of the object for which this constructor was called
        this.name = name;
        this.gender = gender;
        this.roll = roll; // Internally set roll (roll)
        this.marks = marks;

        // accessing a static attribute
        Student.count ++;
    }

    /*
    * Making an object attribute private and giving a public method to access it, is called as
    * encapsulation
    */
   // sobj.roll = 89
    set roll(roll: number) {
        if (roll > 0) {
            this._roll = roll;
        }
    }

    // sobj.roll
    get roll(): number {
        return this._roll;
    }

    // even the methods defined are by default public
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

    // static methods can be called using the class name
    static createStudent(name: string, gender: string, roll: number, marks: number): Student {
        const student: Student = new Student(name, gender, roll, marks);
        return student;
    }
}

export class StudentInfo {

}
