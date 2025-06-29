const http = require("http")

const server = http.createServer((req, res) => {
    // 请求对象、响应对象
    console.log(req, res);
    res.end("hello world")
})

server.listen(3000, () => {
    console.log("server start");
})

