// console.log(window);

// single element selectors

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('#my-form'));

// Multiple element selectors

// const listItems = document.querySelectorAll('.item');
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
//  we can loop them 

// listItems.forEach(item => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();

// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// Eventlistenrs

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
    
//     document.querySelector('.items')
//     .lastElementChild.remove();

// });

// btn2 = document.querySelector('.btn');

//  btn2.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
    
//     document.querySelector('.items')
//     .lastElementChild.remove();

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.message');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Pls enter all fields';
        setTimeout(() => msg.remove(), 3000);    
    } else {
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        li.classList.add('items');
        li.classList.add('item')
        console.log(li);

        userList.appendChild(li);

        // clear the fields

        nameInput.value = '';
        email.value = '';
    }
}
