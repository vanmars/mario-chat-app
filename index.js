const express = require('express');

// App Setup
const app = express();

// Create Server
const server = app.listen(4000, () => {
  console.log('listening to requests on port 4000')
})

// Static Files
app.use(express.static('public'));