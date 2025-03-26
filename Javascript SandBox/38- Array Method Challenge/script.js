//   challenge 1

const people = [
  {
    firstName: 'John',
    lastNme: 'Doe',
    email: 'johndoe@gmail.com',
    phone: 111 - 111 - 11 - 11,
    age: 30,
  },
  {
    firstName: 'jabe',
    lastNme: 'poe',
    email: 'jane@gmail.com',
    phone: 222 - 222 - 22 - 22,
    age: 25,
  },
  {
    firstName: 'bob',
    lastNme: 'traversy',
    email: 'bob@gmail.com',
    phone: 333 - 333 - 33 - 33,
    age: 45,
  },
  {
    firstName: 'sara',
    lastNme: 'traversy',
    email: 'sara@gmail.com',
    phone: 444 - 444 - 44 - 44,
    age: 25,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => {
    return {
      name: person.firstName + ' ' + person.lastNme,
      email: person.email,
    };
  });

// console.log(youngPeople);

// const youngPeople2 = people
//   .filter((person) => person.age <= 25)
//   .map((person) => {
//     return {
//       name: `${person.firstName} ${person.lastNme}`,
//       email: person.email,
//     };
//   });
// console.log(youngPeople2);

// challenge 2

const numbers = [2, -10, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// challenge 3

const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

// console.log(cWords);
