
const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;
console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

radus = 50; // technically works since the system assumes you wanted a new variable

area = radius * radius * PI;
console.log(area);

console.log(radus); //prints 50


//type coersion
const one = 1;
const two = "2";

let result = one * two;
console.log(result);

result = one + two; // since two is a string it assumes conatnation
console.log(result);


//scope

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    
