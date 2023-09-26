// Load registered users from localStorage
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

function toggleForm(formName) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.querySelector('.tab-btn:nth-child(1)');
  const registerTab = document.querySelector('.tab-btn:nth-child(2)');

  if (formName === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else if (formName === 'register') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

function register(event) {
  event.preventDefault();
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;

  if (registeredUsers.some(user => user.username === newUsername)) {
    alert('Username is already taken. Please choose a different one.');
    return;
  }

  registeredUsers.push({ username: newUsername, password: newPassword });
  updateLocalStorage();
  alert('User registered successfully!');
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the provided username and password match a registered user
  const user = registeredUsers.find(user => user.username === username && user.password === password);

  if (user) {
    // Redirect to your website after a 2-second delay
    setTimeout(() => {
      window.location.href = 'website/index.html';   // Replace with your actual website URL
    }, 2000);  // Delay in milliseconds (2 seconds in this case)
  } else {
    alert('Invalid credentials. Please try again.');
  }
}



function updateLocalStorage() {
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}
