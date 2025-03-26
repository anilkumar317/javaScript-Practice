// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority');
// const checkboxInput = document.getElementById('checkbox-input');
// const header = document.querySelector('h1');

function onInput(e) {
  header.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  header.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
  console.log('input focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '2px';
  itemInput.style.outlineColor = 'blue';
}

function onBlur(e) {
  console.log('input blurred');
  itemInput.style.outlineStyle = 'none';
}
// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkboxInput.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);

// Form Submission & FormData Object

const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  //   const item = formData.get('item');
  //   const priority = formData.get('priority');

  const entries = formData.entries();

  for (let entry of entries) {
    console.log(entry[1]);
  }

  //   console.log(entries);
}

// form.addEventListener('submit', onSubmit);
// form.addEventListener('submit', onSubmit2);

// Event Bubbling
