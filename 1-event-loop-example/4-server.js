const http = require('http');

const server = http.createServer((req, res) => {
  console.log('made request');
  res.end('Hello World');
});

server.listen(2000, () => {
  console.log('Server listening on port : 2000....');
});
