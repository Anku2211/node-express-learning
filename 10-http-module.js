const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('This is our Homepage');
  }
  if (req.url === '/about') {
    res.end('This is the about section');
  }
  res.end(`<h1> Oops! </h1> 
  <p>Can not find the page you are looking for</p>
  <a href="/">Back to home</a>`);
});

server.listen(4000);
