// console.log('Hello World!');

const promise = new Promise((reslolve, reject) => {
  setTimeout(() => {
    reslolve({ name: 'john', age: 20 });
  }, 1000);
});

// promise.then((data) => {
//   console.log(data);
// });

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

// async function getUsers() {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/users?_limit=5'
//   );
//   const data = await res.json();
//   console.log(data);
// }

// in another way

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// getUsers();

const getPosts = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const data = await res.json();
  console.log(data);
};

getPosts();
