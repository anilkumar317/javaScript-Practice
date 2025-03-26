// ways to declare a variable
// var,let,const

let firstName = 'john';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming conventions
// only Letters,Numbers,underscores and dollar sign
// can't start with '-' and number

// multi-word Formatting
// firstName=camelCase
// first_name=underscore
// FirstName=PascalCase
// firstname=lowerCase

// Re-assigning variable

age = 31;

console.log(age);

let score;

score = 1;

if (true) {
  score = score + 1;
}
console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
  name: 'Brad',
};

person.name = 'John';

person.email = 'john@gmail.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(d, e, f);
console.log(a);
