function fetchData() {
  fetch('https://randomuser.me/api')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Requst Failed');
      }

      return res.json();
    })
    .then((data) => displayUser(data.results[0]))
    .catch((err) => {
      document.querySelector('#user-details').innerHTML = `<p>${err}</p>`;
    });
}

function displayUser(user) {
  console.log(user);
  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'steelBlue';
  }
  const userDisplay = document.querySelector('#user-details');
  userDisplay.innerHTML = `<img src=" ${user.picture.large}" alt="" />
        <div id="user-info">
          <ul>
            <li><strong>Name:</strong> ${user.name.first} ${user.name.last} </li>
            <li><strong>Email:</strong> ${user.email}</li>
            <li><strong>Phone:</strong> ${user.cell}</li>
            <li><strong>Location:</strong> ${user.location.city}, ${user.location.country} </li>
            <li><strong>Age:</strong> ${user.registered.age}</li>
          </ul>
        </div>
      </div>`;
}

document.getElementById('generate').addEventListener('click', fetchData);
