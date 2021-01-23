const express = require('express');
const socket = require('socket.io');

// App Setup
const app = express();

// Create Server
const server = app.listen(4000, () => {
  console.log('listening to requests on port 4000')
})

// Static Files
app.use(express.static('public'));

// Socket Setup
const io = socket(server);

io.on('connection', (socket) => {   // socket arg is an instance of the socket
  console.log('made socket connection', socket.id);

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);  // io.sockets refers to all sockets
  })

  socket.on('typing', (handle) => {
    socket.broadcast.emit('typing', handle);
  })
})