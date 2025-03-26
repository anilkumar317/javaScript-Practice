const clearBtn = document.querySelector('#clr-button');
// Event Listeners

// function onClear() {
//   const itemList = document.querySelector('.item-list');
//   const items = document.querySelectorAll('.items');

//   items.forEach((item) => item.remove());

// while (itemList.firstChild) {
//   // console.log(itemList);
//   itemList.removeChild(itemList.firstChild);
// }

// JavaScript Event Listeners

// clearBtn.onclick = function () {
//   console.log('clear items');
// };

// addEventListeners

// clearBtn.addEventListener('click', function () {
//   console.log('clear items');
// });

// Shorthand

// clearBtn.addEventListener('click', onClear);
// clearBtn.addEventListener('click', () => alert('Cleared items'));

// Remove eventListeners method

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 3000);

// setTimeout(() => clearBtn.click(), 5000);

// Mouse Events

// const home = document.querySelector('.main-header');
// home.style.cursor = 'pointer';
// console.log(home);

// const onClick = () => {
//   home.style.backgroundColor = '#ccc';
//   home.style.borderRadius = '5px';
//   home.style.padding = '10px';
//   home.style.margin = '10px 20px ';
// };

// const ondoubleClick = () => console.log('Double Click Event');
// const onRightClick = () => console.log('rightClick Event');
// const onMouseDown = () => console.log('MouseDown Event');
// const onMouseUp = () => console.log('MouseUp Event');
// const onMouseWheel = () => console.log('MouseWheel Event');
// const onMouseOver = () => console.log('MouseOver Event');
// const onMouseOut = () => console.log('MouseOut Event');
// const onDragStart = () => console.log('DragStart Event');
// const onDrag = () => console.log('Drag Event');

// Event Listeners

// home.addEventListener('click', onClick);
// home.addEventListener('dblclick', ondoubleClick);
// home.addEventListener('contextmenu', onRightClick);
// home.addEventListener('mousedown', onMouseDown);
// home.addEventListener('mouseup', onMouseUp);
// home.addEventListener('wheel', onMouseWheel);
// home.addEventListener('mouseover', onMouseOver);
// home.addEventListener('mouseout', onMouseOut);
// home.addEventListener('dragstart', onDragStart);
// home.addEventListener('drag', onDrag);

// Event Objects

const home = document.querySelector('.main-header');
home.style.cursor = 'pointer';

function onClick(e) {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //      console.log(e.type);
  //     console.log(e.timeStamp);
  //   console.log(`clientX: ${e.clientX}`);
  //   console.log(`clientY: ${e.clientY}`);
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);
  //   console.log(e.pageX);
  //   console.log(e.pageY);
  //   console.log(e.screenX);
  //   console.log(e.screenY);
}

home.addEventListener('click', onClick);

document.body.addEventListener('click', function (e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
});

// Keyboard Events

const itemInput = document.querySelector('.input');

const onKeyPress = (e) => console.log('keypress event happend');
const onKeyUp = (e) => console.log('keyup event happend');
const onKeyDown = (e) => {
  // Key
  //   if (e.key === 'Enter') {
  //     alert('You pressed enter');
  //   }

  // KeyCode

  //   if (e.keyCode === 13) {
  //     alert('You pressed enter');
  //   }

  // code

  //   if (code === 'Digit1') {
  //     console.log('Yoy pressed 1');
  //   }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log();
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);

itemInput.addEventListener('keydown', onKeyDown);

// Event Delegation & Multiple Events

const listItems = document.querySelectorAll('.items');

listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});

listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    if (e.target.className === 'items') {
      e.target.remove();
    }
  });
});

listItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    console.log(e.currentTarget);
    if (e.target.className === 'items') {
      e.target.style.color = 'red';
    }
  });
});
