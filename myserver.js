const http =require('http');
const fs = require('fs');
const filecontent= fs.readFileSync('home.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});

res.end(filecontent);

});

server.listen(80, '127.0.0.2', ()=>{console.log("hello the server is running")} );