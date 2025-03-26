let x;

name = 'john';
age = 30;

x = 'Hello my name is' + name + ' and  i am ' + age + ' years old';
//  template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// string properties and methods
const s = new String('Hello World');
x = typeof s;
x = s.length;
// Here length is property (Attribute)
x = s[1];

x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('r');
x = s.substring(0, 5);
x = s.substring(7);

x = s.slice(-11, -1);
x = '       Hello World';
x = x.trim();
x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.split(' ,');
console.log(x);
