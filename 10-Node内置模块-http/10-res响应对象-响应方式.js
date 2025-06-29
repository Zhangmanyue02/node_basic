const http = require("http")

const server = http.createServer((req, res) => {
    // 1.响应方式一：
    // res.end("hello HTTP Server")
    // 2.响应方式二：
    res.write("hello ")
    res.write("node ")
    res.end("123")
})

server.listen(3000, () => {
    console.log("server start");
})