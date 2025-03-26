// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => {
  console.log('Page loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded');
});

console.log('Run me');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resize to ${window.innerWidth} X ${window.innerHeight} `;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${scrollX} X ${scrollY}`);
  if (window.scrollY > '70') {
    document.body.style.backgroundColor = 'Black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelector('p').forEach((p) => {
    p.style.color = 'blue';
  });
});
