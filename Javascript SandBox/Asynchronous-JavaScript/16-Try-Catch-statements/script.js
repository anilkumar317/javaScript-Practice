// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

// function double(number) {
//   if (isNaN(number)) {
//     throw new Error(number + 'is not a number');
//   }
//   return number * 2;
// }

// try {
//   const y = double(1);
//   console.log(double('Hello'));
// } catch (error) {
//   console.log(error);
// }

// Error handling in Async & Await

// const getusers = async () => {
//   try {
//     // const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const res = await fetch('http://httpstat.us/500');
//     if (!res.ok) {
//       throw new Error('Request Failed');
//     }
//     const data = await res.text();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getusers();

// const getPosts = async () => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const res = await fetch('http://httpstat.us/500');
//   if (!res.ok) {
//     throw new Error('Request Failed');
//   }
//   const data = await res.text();
//   console.log(data);
// };

// getPosts().catch((err) => console.log(err));

// Multipromises with Async & Await

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject(`${this.status} - ${this.statusText}`);
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//   })
//   .catch((error) => console.log(error));

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors);
// }
// getAllData();
// console.log(123);

// Async function

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();
  console.log(movies, actors, directors);
}
async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);
  console.log(movies, actors, directors);
}

// getAllDataPromiseAll();

getAllDataPromiseAll2();

// getAllDataWithFetch();
