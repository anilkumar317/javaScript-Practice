// Falsy Values:

// - false
// - 0
// - "" or ''(Empty String)
// - null
// - undefined
// - NaN

// Truthy Values

// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - '  ' (space in a string)
// - 'false' (false in a string)
// - [] (Empty Array)
// - {} (Empty object)
// - function () {} (Empty Function)

const x = false;

if (x) {
  console.log('This is the truthy');
} else {
  console.log('This is the falsy');
}

// console.log(Boolean(x));

// Truthy and Fsalsy caveats

const children = 5;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Pls enter number of children');
}

// checking for empty arrays

const posts = ['post One', 'post Two'];

if (posts.length > 0) {
  console.log('List posts');
} else {
  console.log('no posts');
}

// checking for empty objects

const user = {
  name: 'Brad',
};

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('no user');
}

// Loose Equality (==)

console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

// Strict Equality (===)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
