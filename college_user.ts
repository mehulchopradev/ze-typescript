export default class CollegeUser {
    protected name: string; // will be accessible in the same class or any of its sub classes
    gender: string;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }

    getDetails(): string {
        // this - Student object, Professor object, sub class object of CollegeUser
        return `Name: ${this.name}\nGender: ${this.gender}`;
    }
}