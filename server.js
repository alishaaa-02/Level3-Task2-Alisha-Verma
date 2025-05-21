// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static('public'));

// Store users with their socket IDs
const users = {};

io.on('connection', (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on('register', (username) => {
    users[username] = socket.id;
    console.log(`👤 Registered user: ${username}`);
  });

  socket.on('chat message', ({ to, from, message }) => {
    const targetSocket = users[to];
    if (targetSocket) {
      io.to(targetSocket).emit('chat message', { from, message });
    }
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
    for (const user in users) {
      if (users[user] === socket.id) {
        delete users[user];
        break;
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
