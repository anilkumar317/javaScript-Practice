const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts1');
  if (!response.ok) {
    throw new Error('Request Failed');
  }
  const data = await response.json();
  console.log(data);
};

// getPosts().catch((error) => console.log(error));

getUsers();
