// setTimeout(changeText, 2000);

// function changeText() {
//   document.querySelector('h1').textContent = 'Hello from Callback';
// }

// const timerId = setTimeout(changeText, 3000);

// document.querySelector('.button-2').addEventListener('click', () => {
//   console.log(timerId);
//   clearTimeout(timerId);
//   console.log('Timer cancelled');
// });

// setInterval and clearInterval

// const intervalId = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = '#fff';
//   } else {
//     document.body.style.backgroundColor = '#fff';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 167777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
  //   intervalID = null;
}

document.querySelector('.button-1').addEventListener('click', startChange);
document.querySelector('.button-2').addEventListener('click', stopChange);
