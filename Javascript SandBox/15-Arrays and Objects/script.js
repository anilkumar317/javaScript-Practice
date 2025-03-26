let x;
// Array Literals
const num = [12, 45, 33, 29, 39];

const mixed = [12, 'Hello', true, null];

// Array Constructor

const str = new Array('apple', 'grape', 'orange');

x = str[0];
x = num[0] + num[3];

x = `My favourite fruit is ${str[2]}`;

x = num.length;

str[2] = 'pear';

// str.length = 2;

str[3] = 'strawberry';
str[str.length] = 'blueberry';
str[str.length] = 'peach';

x = str;

const arr = [34, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();

// arr.unshift(99);
// arr.shift();
// arr.reverse();
// x = arr.includes(16);
// x = arr.indexOf(55);

// x = arr.slice(1, 4);

// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
