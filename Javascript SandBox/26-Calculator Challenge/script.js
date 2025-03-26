function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  console.log(result);
  return result;
}

// calculator(5, 2, '/');

const d = new Date(2024, 12, 1, 13, 0, 0);

const month = d.getMonth();
const hour = d.getHours();
console.log(hour);

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is  March');
    break;
  default:
    console.log('It is not January, February or March');
}

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Evening');
}
