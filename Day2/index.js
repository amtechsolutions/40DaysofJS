console.log('Defining Variables');
let age=54;
let name = 'Sadanand';
let isStudent=false;
const status = "Indian";
let favourateProgrammingLanguage='JavaScript';

age=24;
// status = 'NRI'; // error
console.log(age,name,isStudent,status,favourateProgrammingLanguage);

let student =  {
    sname : 'Harish',
    sage : 14,
    std : 10,
    fees : 7890.00
}
console.log('Student :',student);
let newStudent = student;
console.log('New Student',newStudent);
newStudent.sname="Malhar";
console.log('Student :',student);
let marks=[155,167,191,187]
console.log('Marks',marks);
let newMarks = marks;
console.log('New Marks :',newMarks);
newMarks[1]=175;
console.log('After updation of New Marks. Marks Array :\n',marks);
