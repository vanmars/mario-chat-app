// Establish connection between client and server
const socket = io.connect('http://localhost:4000');

// Query Dom
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// Emit Events
btn.addEventListener('click', () => {
  socket.emit('chat', {      // 1st param: name of message, 2nd param: what data to send to server
    message: message.value,
    handle: handle.value
  })                        
})

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
})

// Listen for Events
socket.on('chat', (data) => {
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})

socket.on('typing', (handle) => {
  feedback.innerHTML = '<p><em>' + handle +  '  is typing a message...</em></p>';
})

