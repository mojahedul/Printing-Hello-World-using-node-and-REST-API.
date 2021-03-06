// our dependencies
const express = require('express');
const app = express();

// from top level path e.g. localhost:3000, this response will be sent
app.get('/', (request, response) => response.send('Hello World-My first js file'));

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));