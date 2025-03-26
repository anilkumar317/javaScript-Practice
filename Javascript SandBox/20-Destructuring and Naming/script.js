const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = { firstName, lastName, age };
// This is callled Destructuring

// console.log(person);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: 'John Doe',
  address: {
    street: 123,
    landmark: 'Maremma Gudi veedhi',
    place: 'Beldona',
  },
};

const {
  user,
  id,
  address: { street, place },
} = todo;

console.log(todo.address.place);

// Destructure Arrays
const num = [23, 67, 33, 49, 52];

const [first, second, ...rest] = num;

console.log(first, second, rest);
