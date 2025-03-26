let x;
// Object Literals

// const todo = {};

// Object Consructor

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

const person = {
  adress: {
    coords: {
      lat: 42.9324,
      lng: -71.3568,
    },
  },
};

x = person.adress.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };
let obj3 = { obj1, obj2 };
obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup Childrens from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos;

x = todos[1].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');

console.log(x);
