const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Welcome to the page');
});

server.listen(2000);
