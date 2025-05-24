const socket = io();
const loginForm = document.getElementById('loginForm');
const chatForm = document.getElementById('chatForm');
const chatSection = document.getElementById('chatSection');
const messages = document.getElementById('messages');

let currentUser = '';

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById('username');
  currentUser = usernameInput.value.trim();
  if (currentUser) {
    socket.emit('register', currentUser);
    loginForm.classList.add('hidden');
    chatSection.classList.remove('hidden');
  }
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const to = document.getElementById('to').value.trim();
  const message = document.getElementById('message').value.trim();

  if (to && message) {
    socket.emit('chat message', { to, from: currentUser, message });
    displayMessage(`To ${to}: ${message}`);
    chatForm.reset();
  }
});

socket.on('chat message', ({ from, message }) => {
  displayMessage(`From ${from}: ${message}`);
});

function displayMessage(text) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
