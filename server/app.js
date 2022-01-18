const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();

const PORT = process.env.PORT || 2022;

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
  },
});

server.listen(PORT, () => {
  io.on('connection', (socket) => {
    console.log(socket.id);
    //Karşılama mesajı gönder...
    socket.emit('WELCOME_MESSAGE', `Oooo ${socket.id} hoşgeldin`);
    socket.on('NEW_BOOKMARK_EVENT', (bookmark) => {
      //Gönderen hariç herkese gönder.
      socket.broadcast.emit('NEW_BOOKMARK_ADDED', bookmark);
    });
  });
});
