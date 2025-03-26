let x;

const person = {
  name: 'john Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 main street',
    city: 'bostan',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person;
x = person['name'];

x = person.address.state;

x = person.hobbies;
x = person.hobbies[0];

person.name = 'Anil Kumar';

x = person.isAdmin;
x = person['isAdmin'];

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};
x = person.greet();

// console.log(x);
