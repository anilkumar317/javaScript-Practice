
// var, let and const 

// let age = 30;
// age = 31;
// console.log(age);

// let score;
// score = 10;
// console.log(score);

// datatypes

// strings,number,boolean,null,undefined,symbols

// const name = 'john';
// const age2 = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// strings

// const name = 'john';
// const age = 30;

// console.log('My name is '+ name +' and am '+ age +' yeras old' );
// console.log(`My name is ${name} and am ${age}  yeras old` );

// const s = 'Hello World';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log((s.substring(0, 5)).toUpperCase());
// console.log(s.split(''));

// const s = 'Technology, Computers, ITb Code';
// console.log(s.split(','));

// Arrays that variables can hold multiple values

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];

// console.log(fruits[0]);
// fruits[3] = 'grapes';
// fruits.push('mangoes');
// fruits.unshift('wine');
// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// object literals

// const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '123 main',
//         city: 'Boston',
//         state: 'NA'
//     }
// }

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {firstName, lastName, address:{ city }} = person
// console.log(city);

// person.email = 'john@gmail.com';

// console.log(person);

// Arrays 

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isComplete: false
    },
];

// console.log(todos);
// console.log(todos[2].text);
// console.log(todos[1]);
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// for loop

// for (i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }
// This is a clean and neat way

// for (let todo of todos) {
//     console.log(todo.text);
// }

// forEach, map, filter 

// todos.forEach(function(todo){
//     console.log(todo.id);
// });
// for using particular text element

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// for using based on condition

// const todoText2 = todos.filter(function(todo){
//     return todo.isComplete === true;
// });

// chaining methods

// const todoText3 = todos.filter(function(todo){
//     return todo.isComplete === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoText3);

// conditions

// const x = 11;
// const y = 10;

// if(x > 5 || y > 10 ) {
//     console.log('x is more than 5 or y is more than 10');
// }

// const x = '10'; 
// const color = x > 10 ? 'red': 'blue';
// console.log(color);

// const color2 = 'green';

// switch (color2) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is neither red nor blue');
//         break;        
// }

// function addNums(num1 = 1, num2 = 1) {
//       return (num1 + num2);
// }
// console.log(addNums(8, 3));

// Arrow functions 

// const addNum = (num1, num2) => num1 + num2;
// console.log(addNum(4, 5));

// todos.forEach(todo => {console.log(todo.text)});

// OOP 

// constructive functions and prototypes
 
// function Person(firstName, lastName, dob) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.dob = new Date(dob);      
// }

// Instantiate Object

// const person1 = new Person('John', 'Doe', '01-07-1992');
// const person2 = new Person('Jane', 'Doe', '01-08-1993');

// console.log(person2.dob.getFullYear());


// Person.prototype.getFullName = function () {
    
// }

// console.log(person1.getFullName());
// console.log(person1.getBirthyear());

// OOPs classes

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 
//     }
//     getBirthyear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//  }

// //  Instantiate object

// const person1 = new Person('John', 'Doe', '01-07-1992');
// const person2 = new Person('Jane', 'Doe', '01-08-1993');

// console.log(person1.getFullName());
// console.log(person2.getBirthyear());

// console.log(person1);


















