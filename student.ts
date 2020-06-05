import CollegeUser from './college_user';

export default class Student extends CollegeUser {
    roll: number;
    marks: number;

    constructor(name: string, gender: string, roll: number, marks: number) {
        // this - current Student object
        super(name, gender); // compulsory to call super class constrcutor
        // must be the first statement in the sub class constructor

        this.roll = roll;
        this.marks = marks;
    }

    // method overriding
    getDetails(): string {
        const part1: string = super.getDetails(); // calls the super class method
        const part2: string = `\nRoll: ${this.roll}`;
        return part1 + part2;
    }

    greet(): string {
        return `Hello ${this.name}`;
    }
}