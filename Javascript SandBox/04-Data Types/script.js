// primitive Data Types
// string,Number,Boolean,Null,Undefined,Symbol,BigInt

// string

const firstName = 'Sara';

// Number

// const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined

// let score;
const score = undefined;

// symbol
const id = Symbol('id');

// bigInt
const bigInt = 9223322363535535n;

// referance Data Types or Objects

// object literals,arrays,functions

const numbers = [1, 2, 3, 4];

// referrance Data Type

// const person = {
//   name: 'John',
// };

function sayHello() {
  console.log('Hello');
}

// const output = sayHello;
// console.log(output, typeof output);

// static Typing Vs Dynamic Types

// Primitive Types are stored directly in the "Stack"
// Reference Types are stored in the heap and accessed by reference  Arrays || Functions || Objects

// These values are  stored on the stack

const name = 'john';
const age = 30;

// Reference valuse are stored in the "Heap"

const person = {
  name: 'john',
  age: 40,
};

let newName = name;

newName = 'Jane';

let newPerson = person;

newPerson.name = 'Bradly';

console.log(person, newPerson);
