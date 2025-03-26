function getData(endPoint) {
  return new Promise((reslove, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endPoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          reslove(JSON.parse(this.responseText));
        } else {
          reject('Error: Something Went Wrong');
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

// getAllData();

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, directors, actors);
}

// getAllDataWithFetch();

async function getAllDataPromiseAll() {
  const [moviesRes, directorsRes, actorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./directors.json'),
    fetch('./actors.json'),
  ]);

  const movies = await moviesRes.json();
  const directors = await directorsRes.json();
  const actors = await actorsRes.json();

  console.log(movies, directors, actors);
}

// getAllDataPromiseAll();

async function getAllDataPromiseAll2() {
  const [movies, directors, actors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
  ]);

  console.log(movies, directors, actors);
}

getAllDataPromiseAll2();

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//     return getData('./actors.json');
//   })
//   .then((actors) => console.log(actors))
//   .catch((error) => console.log(error));
