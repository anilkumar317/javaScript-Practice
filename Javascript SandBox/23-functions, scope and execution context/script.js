function sayHello() {
  console.log('Hello World');
}
// sayHello();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(5, 9);

function subtract(num1, num2) {
  return num1 - num2;
}

// let output = subtract(2, 5);

// console.log(output, subtract(20, 5));

// Arguments and parameters

// Default Parameters

function registerUser(user = 'Bot', x = 10) {
  //   if (!user) {
  //     user = 'Bot';
  //   }
  return user + ' is registerd' + ' the value of X is ' + x;
}

// console.log(user); user is not defined
// console.log(registerUser());

// Rest Parameters

function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

// console.log(sum(1, 2, 3, 4, 5, 100));

// Objects as params

function loginUser(user) {
  return `the user ${user.name} with id of ${user.id} is loggedin`;
}

const user = {
  id: 1,
  name: 'John',
};

// console.log(loginUser(user));

// Arrays as Params

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}

// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Global and Function Scope

// alert(10);

// const x = 100;

// console.log(x, 'in global');

function run() {
  //   console.log(x, 'in function');
  //   console.log(window.innerWidth);
}
// run();

if (true) {
  //   console.log(x, 'in block');
}

// function add() {
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }
// add();

// Block level Scope

const x = 100;

if (true) {
  const y = 200;
  //   console.log(x + y);
}
// console.log(x + y);

for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(c);
// var is not block scope

function run() {
  var d = 100;
  console.log(d);
}
// var is a function scoped
// run();

// Nested Functions

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  //   console.log(y);
  second();
}
// first();

if (true) {
  const x = 100;
  if (x === 100) {
    const y = 200;
    // console.log(x + y);
  }
  //   console.log(y);
}

// Declaration and Expressions in Functions

function addDollarSign(value) {
  return '$' + value;
}
// console.log(addDollarSign(100));

// Function Expression

const addPlusSign = function (value) {
  return '+' + value;
};
// console.log(addPlusSign(200));

// Arrow functions

// regular function

// function add(a, b) {
//   return a + b;
// }

// Arrow functions

const add = (x, y) => {
  return x + y;
};

// console.log(add(4, 5));

// Shorter Arrow function
// Implicit Return
const subtract2 = (a, b) => a - b;

// can leave off () with a single param
const double = (a) => a * 2;
// console.log(subtract2(10, 5));
// console.log(double(8));

// returning Object

const createObj = () => ({
  name: 'Brad',
});

// console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n));

// IIFE Immediately Invoked Function Expression

// it should not pollute the global scope object

const user2 = 'John';
(function () {
  const user2 = 'Jane';
  console.log(user2);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Shawn');

(function hello() {
  console.log('Hello');
})();
