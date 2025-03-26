const posts = [
  { title: 'Post One', body: 'This is the Post One' },
  { title: 'Post Two', body: 'This is the Post Two' },
];

// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 2000);
// }

// function getPost() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       const div = document.createElement('div');
//       div.innerHTML = `
//       <ul>
//           <li>
//             <strong>${post.title}</strong> - ${post.body}
//           </li>
//       </ul>`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is the post' }, getPost);

// callback to promise refactor

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = div.innerHTML = `
                 <ul>
                     <li>
                       <strong>${post.title}</strong> - ${post.body}
                    </li>
                </ul>`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong> ${error} </strong>`;
  document.getElementById('post').appendChild(h3);
}

createPost({ title: 'Post Three', body: 'This is the Post' })
  .then(getPost)
  .catch(showError);
