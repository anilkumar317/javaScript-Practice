const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumalator, currentValue) {
//   return accumalator + currentValue;
// }, 0);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum);

// using a forloop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
// console.log(sum3());

const cart = [
  { id: 1, name: 'product 1', price: 130 },
  { id: 2, name: 'product 2', price: 150 },
  { id: 3, name: 'product 3', price: 175 },
];

const totalPrice = cart.reduce((acc, cur) => {
  return (acc += cur.price);
}, 0);

// long form

const totalprice2 = cart.reduce(function (acc, cur) {
  return acc + cur.price;
}, 0);

console.log(totalprice2);
