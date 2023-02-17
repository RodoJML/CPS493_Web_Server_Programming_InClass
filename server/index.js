const http = require('http');
// Contains all exports from http 
// Any function from HTTP is now available here


const hostname = '127.0.0.1';                       // Loopbackl address
const port = process.env.PORT || 3000;              // Commonly used as a development port
// We use 

const server = http.createServer((req, res) => {
// When a text message comes in, run this function...

    // Remember Http is plain text
    // Server translate text to what client is asking for

    // res is an object to send messages to the client

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello New Paltz');
});


server.listen(port, () => {
// Listens for network traffic, this is a call for the Operating System.
// Node code runs **once** and makes a server in memory 

  console.log(`Server running at http://${hostname}:${port}/`);
});
