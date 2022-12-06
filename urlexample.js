const http = require("http");
const url = require("url");
//url.parse()
http.createServer((request, response) => {
        console.log(request.url);
        const urlOb = url.parse(request.url, true);
        console.log(urlOb)
        console.log(urlOb.query.keywords)
    })
    .listen(8082);