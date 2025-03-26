const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=20')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => addTodoToDOM(item));
    });
};

const addTodoToDOM = (item) => {
  const div = document.createElement('div');
  if (item.completed) {
    div.classList.add('todo-list');
    div.classList.add('done');
  }
  div.appendChild(document.createTextNode(item.title));
  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#form').addEventListener('submit', createTodo);
};

init();
