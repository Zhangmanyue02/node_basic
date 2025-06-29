const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log("---------------------");
    console.log(req.method);
    console.log("---------------------");
    console.log(req.headers);
})

server.listen(3000, () => {
    console.log("server start");
})