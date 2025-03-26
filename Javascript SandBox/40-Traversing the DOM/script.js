//  get child element form the parent

// let output;

// const parent = document.querySelector('.parent');

// output = parent.children[2];
// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;
// console.log(output);

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// console.log(output);

// Get parent Element form child

// const child = document.querySelector('.child');

// output = child.parentElement;

// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.borderRadius = '5px';
// child.parentElement.style.padding = '10px';

// Get sibling Elements from Child

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextElementSibling;
// output = secondItem.nextElementSibling.style.color = 'orange';
// output = secondItem.previousElementSibling.style.color = 'green';

// console.log(output);

// DOM Node Type

let output;

// const parent = document.querySelector('.parent');

// output = parent.childNodes;

// output = parent.childNodes[3].textContent;
// output = parent.childNodes[0].nodeName;
// output = parent.childNodes[3].innerHTML = 'child one';

// output = parent.lastChild.textContent = 'Hello';

// parent Node

// let output;

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement;
// console.log(output);

// child.parentNode.style.backgroundColor = '#ddd';
// child.parentNode.style.padding = '10px';
// child.parentNode.style.borderRadius = '10px';

// console.log(output);

// Siblings

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem.nextSibling;
// output = secondItem.previousSibling;

// console.log(output);

// Adding & removing styles and classes

// const text = document.querySelector('p');
// const itemList = document.querySelector('.item-list');
// const items = document.querySelectorAll('.child');
// console.log(text);
// function run() {
//   className
//   console.log(itemList.className);
//   text.className = 'dark ';
//   console.log(itemList);
// classList
//   console.log(itemList.classList);
//   itemList.classList.forEach((item) => console.log(item));
//   text.classList.add('dark');
//   text.classList.remove('p');
//   text.classList.toggle('dark');
//   text.classList.toggle('hidden');
//   text.classList.replace('card', 'dark');
// Change Style

//   itemList.style.lineHeight = '3';

//   items.forEach((item, index) => {
//     item.style.color = 'red';
//     if (index === 2) {
//       item.style.color = 'blue';
//     }
//   });
// }

// document.querySelector('#btn').onclick = run;
