const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Hello, this is my first Node.js program');
    }
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});