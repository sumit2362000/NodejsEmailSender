//http

const http = require('http');
const server = http.createServer((req, resp) => {
    //req: request process
    //resp: for writing response
    resp.writeHead(200, { "content-type": "text/html" });
    resp.write("<h1>Wow this is response from first server</h1>");
    resp.write("<h2>Ok nice work</h2>");
    resp.write("<button>Click me</button>");
    resp.end("Ok by by");
}).listen(9898);