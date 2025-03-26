let output;

// output = document.all;

// output = document.documentElement;
// output = document.head;
// output = document.body;
// output = document.head.children;
// output = document.body.children[3];

// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// output = document.forms;
// output = document.forms[0][1].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// output = document.forms[0].id = 'new-id';

// output = document.links[0];
// output = document.links[0].id = 'google-link';
// output = document.links[0].innerText = 'Google';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// output = document.images;

// console.log(output);

// const forms = Array.from(document.forms);
// forms.forEach((form) => {
//   console.log(form);
// });

// DOM Methods
// document.getElementById();

// console.log(document.getElementById('title'));
// console.log(document.getElementById('title').id);
// console.log(document.getElementById('title').className);
// console.log(document.getElementById('title').getAttribute('id'));

// Set Attributes

// document.getElementById('title').id = 'new-id';
// document.getElementById('title').title = 'Shopping List';
// document.getElementById('title').setAttribute('class', 'title');

const title = document.getElementById('title');

// GET/Change content

// console.log(title.innerHTML);
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerHTML = 'Hello Again';
// title.innerHTML = '<strong> Shopping List <strong/>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#title'));
// console.log(document.querySelector('input[type="text"]'));

// console.log(document.querySelector('ul'));

// use these methods on other elements

const firstItem = document.querySelector('div:nth-child(2)');
firstItem.style.color = 'blue';

// const secondItem = document.querySelector('ul div:nth-child(3)');

// secondItem.innerHTML = ` <li class="list-group-item">Mango</li>
//         <p class="delete-btn">X</p>`;

// DOM selectors on multiple items

// querySelectorAll()

// const listItems = document.querySelectorAll('.items');
// console.log(listItems[0]);

// console.log(listItems[1].innerHTML);

// listItems[3].style.color = 'red';

// listItems.forEach((item, index) => {
//   if (index === 0) {
//     item.remove();
//   }
//   if (index === 2) {
//     item.innerHTML = `<li class="list-group-item">Mango</li>
//         <p class="delete-btn">X</p>`;
//   }
// });

// const listItems2 = document.getElementsByClassName('list-group-item');

// console.log(listItems2[0].innerHTML);

// const listItemsArr = Array.from(listItems2);

// listItemsArr.forEach((item) => {
//   let output;
//   output = item.innerHTML;
//   console.log(output);
// });

// const listItems3 = document.getElementsByTagName('li');

// console.log(listItems3[0]);

// Create & Append Elements in DOM

// const div = document.createElement('div');

// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // div.innerText = 'Hello World';

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// // document.body.appendChild(div);

// // document.querySelector('ul').appendChild(div);

// // innerHTML Vs CreateElement

// // quick and dirty

// function createListItem(item) {
//   const li = document.createElement('li');
//   li.innerHTML = `<div class="items">
//         <li class="list-group-item">${item}</li>
//         <p class="delete-btn">X</p>
//       </div>`;
//   li.style.listStyle = 'none';

//   document.querySelector('ul').appendChild(li);
// }

// // clean and performant

// function createNewItem(item) {
//   const div = document.createElement('div');
//   div.className = 'items';
//   div.appendChild(document.createElement('li')).className = 'list-group-item';
//   div.appendChild(document.createElement('p')).className = 'delete-btn';
//   div.querySelector('li').innerText = item;
//   div.querySelector('p').innerText = 'X';

//   document.querySelector('ul').appendChild(div);
// }

// createListItem('Eggs');
// createNewItem('cheese');

// // Insert Elements ,Text & HTML

// // insertAdjacentElement() Example

// function inserElement() {
//   const filter = document.querySelector('#title-2');

//   const h1 = document.createElement('h1');
//   h1.textContent = 'Insert Adjacent Element';
//   filter.insertAdjacentElement('afterend', h1);
// }
// // inserElement();

// // Replacing the elements

// function replaceFirstItem() {
//   const firstItem = document.querySelector('.list-group-item');
//   const li = document.createElement('li');
//   li.textContent = 'Replaced First';
//   firstItem.replaceWith(li);
// }

// // replaceFirstItem();

// // function replaceSecondItem() {
// //   const secondItem = document.querySelector('li:nth-child(2)');
// //   secondItem.outerHTML = '<li>Replaced Second</li>';
// // }

// // replaceSecondItem();

// // Repalce all items

// function repalceAllItems() {
//   const items = document.querySelectorAll('.list-group-item');
//   items.forEach((item, index) => {
//     item.innerHTML = 'Replaced All';
//     if (index === 1) {
//       item.innerHTML = 'Replaced Second';
//     } else {
//       item.innerHTML = 'Replaced All';
//     }
//   });
// }

// // repalceAllItems();

// // Replace Child Heading

// function replaceChildHeading() {
//   const header = document.querySelector('.main-header');
//   const h1 = document.querySelector('.main-header h1');
//   const h2 = document.createElement('h2');
//   h2.id = 'title';
//   h2.textContent = 'Shopping List';
//   header.replaceChild(h2, h1);
// }

// // replaceChildHeading();

// // Remove Elements & Remove Child

// function removeClearBtn() {
//   document.querySelector('.clear-btn').remove();
// }
// // removeClearBtn();

// function removeFirstItem() {
//   const ul = document.querySelector('ul');
//   const div = document.querySelector('.items');
//   const li = document.querySelector('li:first-child');

//   console.log(ul);

//   ul.removeChild(div);
// }
// // removeFirstItem();
