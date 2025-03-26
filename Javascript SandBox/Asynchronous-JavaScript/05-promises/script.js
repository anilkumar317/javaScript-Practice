//create promise

// const promise = new Promise((resolve, reject) => {
// Do some async
//   setTimeout(() => {
//     console.log('Async task completed');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed..');
// });

console.log('Hello from global scope');

const getUser = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ name: 'John', age: 30 });
  } else {
    reject('Error: Something went wrong');
  }
})
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Promise has been resolve or reject');
  });
