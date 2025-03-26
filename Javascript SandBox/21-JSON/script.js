const post = {
  id: 1,
  title: 'Post One',
  body: 'This is a body',
};

// convert to Json string

const str = JSON.stringify(post);

// parse that JSON

const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'post one',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'post two',
    body: 'This is the body',
  },
  {
    id: 3,
    title: 'post three',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

const obj2 = JSON.parse(str2);
