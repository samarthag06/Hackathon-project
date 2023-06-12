const http =require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{res.statusCode=200;
 const filecontent= fs.readFileSync('e:\asus\WEB DEVELOPMENT\PROJECT\home.html',"utf-8")
res.setHeader('Content-type', 'text/html');
res.end(filecontent);

});

server.listen(80, '127.0.0.1', ()=>{console.log("hello the server is running")} );