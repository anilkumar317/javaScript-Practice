// challenge 1

function getCelcius(f) {
  const celcius = ((f - 32) * 5) / 9;
  console.log('The temperature in Celcius is ' + celcius);
}
getCelcius(50);

// By using Arrow function

const getCelcius2 = (f) => ((f - 32) * 5) / 9;

const celcius2 = getCelcius2(40);

console.log(`The temperature in celcius is ${getCelcius2()}`);

// Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(min);
  console.log(max);
}

const minMax2 = (arr) => {
  const min2 = Math.min(...arr);
  const max2 = Math.max(...arr);
  console.log(min2);
  console.log(max2);
};
minMax2([1, 2, 3, 4, 5, 10, 0]);

// Challenge 3

// (function (l, w){
//     const area = l * w;
//     console.log(area);
// })(10, 2);

((l, w) => {
  const area = l * w;
  console.log(
    `The area of the rectangle with length of the ${l} and the width of the ${w} is ${
      l * w
    }`
  );
})(10, 6);
