import Student from './student';
import Professor from './professor';

const s1: Student = new Student('mehul', 'm', 10, 90);

const p1: Professor = new Professor('jane', 'f', ['Physics', 'Chemistry']);

/* console.log(s1.name);
console.log(s1.gender);

console.log(p1.name);
console.log(p1.gender);
*/

console.log(s1.getDetails()); // Name: mehul \n Gender: m\nRoll: 10
// Internally
// Student.getDetails(s1)



console.log(p1.getDetails()); // Name: jane \n Gender: f
// Internally
// Professor.getDetails(p1)

// s1.name = 'hiii';