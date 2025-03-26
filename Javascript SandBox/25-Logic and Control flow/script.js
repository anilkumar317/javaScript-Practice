// if Statements

if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is NOT true');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than  ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is number`);
}
// console.log(z);

// shorthand If

if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
else console.log('This is false');

// If-Else amd Nesting

const d = new Date(10, 30, 2024, 6, 45, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If

if (hour < 12) {
  console.log('Good Morning!');
  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzz...');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}

// Switch statements

const a = new Date(2024, 8, 18, 19, 0, 0);

const month = a.getMonth();

switch (month) {
  case 1:
    console.log('It is a january');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('it is March');
    break;
  default:
    console.log('It is not Jan, Feb or Mar');
}

switch (true) {
  case hour < 12:
    console.log('Good Morning!');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}

// Function Execution and Memory allocation

// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);
