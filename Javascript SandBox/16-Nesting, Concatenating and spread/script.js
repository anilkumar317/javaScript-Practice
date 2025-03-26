let x;
const fruits = ['apple', 'pear', 'orange'];
const berris = ['strwberry', 'blueberry', 'rasberry'];

// fruits.push(berris);

// x = fruits[3][1];

const allFruits = [fruits, berris];

x = allFruits[1][0];

// concatenation

x = fruits.concat(berris);

// spread operator(...)

x = [...fruits, ...berris];

// Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr;

x = arr.flat();

// Staric Methods on Array object

x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x);
