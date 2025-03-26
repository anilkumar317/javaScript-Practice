// Fetch basics

// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Fetching from API

fetch('https://api.github.com/users/bradtraversy/repos?limit=10')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error!: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    return console.log(data);
  })
  .catch((error) => console.log(error));
