const students = [
    {id: 34, name: "noman"},
    {id: 35, name: "ashik"},
    {id: 36, name: "limon"},
    {id: 37, name: "tareq"}
]; 
const names = students.map( s => s.name);
console.log(names);
 const bigger = students.filter( s => s.id >= 35);
 const biggerone = students.find( s => s.id > 35);
 console.log(biggerone);


// const output = [];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const object = student.name;
//     output.push(object);
// }
// console.log(output);

// const uid = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.id;
//     uid.push(result);
// }
// console.log(uid);