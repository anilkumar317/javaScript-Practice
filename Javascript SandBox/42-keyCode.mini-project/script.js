// Method 1

// window.addEventListener('keydown', (e) => {
//   const insert = document.querySelector('.container');

//   insert.innerHTML = `<div class="insert">
//         <p>e.Key</p>
//         <div class="key" id="key">
//         ${e.key === ' ' ? 'Space' : e.key}
//         </div>
//       </div>
//       <div class="insert">
//         <p>e.KeyCode</p>
//         <div class="keycode" id="keycode"> ${e.keyCode} </div>
//       </div>
//       <div class="insert">
//         <p>e.code</p>
//         <div class="e-code" id="e-code"> ${e.code} </div>
//       </div>`;
// });

// Method 2

function showKeyCodes(e) {
  const insert = document.querySelector('.container');
  insert.innerHTML = '';

  const keyCodes = {
    'e.Key': e.key === ' ' ? 'Space' : e.key,
    'e.keycode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'insert';
    const p = document.createElement('p');
    const div2 = document.createElement('div');
    div2.className = 'key';
    insert.appendChild(div);

    const pText = document.createTextNode(key);
    const divText = document.createTextNode(keyCodes[key]);

    p.appendChild(pText);
    div2.appendChild(divText);
    div.appendChild(p);
    div.appendChild(div2);

    insert.appendChild(div);
  }
  console.log(insert);
}

window.addEventListener('keydown', showKeyCodes);
