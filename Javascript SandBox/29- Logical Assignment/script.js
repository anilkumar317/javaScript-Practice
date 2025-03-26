//  ||= assigns the right side value only if the left is a falsy value.

let a = false;

if (!a) {
  a = 10;
}

// a = a || 10;

a ||= 10;

// console.log(a);

//  &&= assigns the right side value only if the left is a truthy value.

let b = 10;

// if (b) {
//   b = 20;
// }

b = b && 20;
console.log(b);

//  ??= assigns the right side value only if the left is null or undefined
c = null;
if (c === null || c === undefined) {
  c = 20;
}
c = c ?? 20;

c ??= 20;
console.log(c);

// Ternary Operator

const age = 19;

// using if statement

if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You can not vote');
}

// ternary Operator

age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote';

console.log(canVote2);

// Multiple statements

const auth = true;

// let redirect;

// if (auth) {
//   alert('Welcome to the Dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the Dashboard'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// auth ? console.log('Welcme to the Dashboard') : null;

auth && console.log('Welcome to the Dashboard');
