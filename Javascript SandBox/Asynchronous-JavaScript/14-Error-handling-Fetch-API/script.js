// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('Success');
//   });

// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Catch runs on a network run
// fetch('http://hello123.net')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// check for specific code

fetch('http://httpstat.us/200')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Request Failed');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (!response.status === 200) {
      throw new Error();
    } else {
      return response;
    }
  })
  .then(() => {
    console.log('Success');
  })
  .catch((error) => {
    console.log(error);
  });
