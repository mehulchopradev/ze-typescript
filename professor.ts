import CollegeUser from './college_user';

export default class Professor extends CollegeUser {
    subjects: string[];

    constructor(name: string, gender: string, subjects: string[]) {
        super(name, gender);

        this.subjects = subjects;
    }
}